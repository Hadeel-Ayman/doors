const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const ApiFeatures = require("../utils/ApiFeatures");
const { ref, uploadBytes, deleteObject, getDownloadURL } = require("firebase/storage");
const { storage } = require('../middlewares/firebase');

exports.deleteOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    // البحث عن الوثيقة للحصول على مسار الملف
    const document = await Model.findById(id);
    if (!document) {
        return next(new ApiError(`Document not found with this ID ${id}`, 404));
    }

    // حذف الوثيقة من قاعدة البيانات
    await Model.findByIdAndDelete(id);

    // حذف الملف من التخزين إذا كان موجودًا
    if (document.image) {
        const storageRef = ref(storage, document.image);
        await deleteObject(storageRef).catch((error) => {
            console.error("Failed to delete file:", error);
        });
    }

    res.status(200).send('The document was deleted and associated file was removed');
})


exports.updateOnee = (Model) => asyncHandler(async (req, res, next) => {
    try {
        // التحقق من وجود ملف صورة في الطلب
        const file = req.file;
        const updateData = { ...req.body }; // نسخ البيانات المرسلة في الطلب

        // إذا كان هناك ملف صورة، قم بتحديث حقل الصورة
        if (file) {
            const fileName = Date.now() + '-' + file.originalname; // استخدام اسم فريد للملف
            const storageRef = ref(storage, `uploads/${fileName}`);
            await uploadBytes(storageRef, file.buffer);
            const imageUrl = await getDownloadURL(storageRef); // احصل على رابط التحميل الكامل
            updateData.image = imageUrl; // استخدم رابط التحميل الكامل
        }

        const updateDoc = await Model.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true } // إرجاع الوثيقة بعد التحديث
        );

        if (!updateDoc) {
            return next(new ApiError(`Document not found with this ID ${req.params.id}`, 404));
        }

        // إرسال الاستجابة بعد التحديث بنجاح
        return res.status(200).json(updateDoc);
    } catch (error) {
        console.error('Error processing request:', error);
        // إرسال رسالة خطأ في حالة وجود أي مشكلة أثناء معالجة الطلب
        return res.status(500).send('Error processing request.');
    }
    next()
});


exports.updateOne = (Model) => asyncHandler(async (req, res, next) => {
    try {
        // التحقق من وجود ملف صورة في الطلب
        const file = req.file;
        const updateData = { ...req.body }; // نسخ البيانات المرسلة في الطلب

        // إذا كان هناك ملف صورة، قم بتحديث حقل الصورة
        if (file) {
            const fileName = Date.now() + '-' + file.originalname; // استخدام اسم فريد للملف
            const storageRef = ref(storage, `uploads/${fileName}`);
            await uploadBytes(storageRef, file.buffer);
            const imageUrl = await getDownloadURL(storageRef); // احصل على رابط التحميل الكامل
            updateData.image = imageUrl; // استخدم رابط التحميل الكامل
        }

        const updateDoc = await Model.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true } // إرجاع الوثيقة بعد التحديث
        );

        if (!updateDoc) {
            return next(new ApiError(`Document not found with this ID ${req.params.id}`, 404));
        }

        res.status(200).json(updateDoc);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Error processing request.');
    }
});


exports.createOne = (Model) => async (req, res, next) => {
    try {
        let imageUrl = null;
        const file = req.file;

        if (file) {
            const fileName = Date.now() + '-' + file.originalname;
            const storageRef = ref(storage, `uploads/${fileName}`);
            await uploadBytes(storageRef, file.buffer);
            imageUrl = await getDownloadURL(storageRef); // احصل على رابط التحميل الكامل
        }

        const docData = { ...req.body, image: imageUrl };
        const Doc = await Model.create(docData);

        res.status(200).json({
            success: true,
            message: "Successfully Created",
            Doc,
        });
    } catch (error) {
        console.error('Error processing request:', error);

        if (!res.headersSent) {
            res.status(500).send('Error processing request.');
        }
    }
};


exports.getOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const oneDoc = await Model.findById(id)
    if (!oneDoc) {
        return next(new ApiError(`Doc not found of this id ${id}`, 404))
    }
    res.status(200).send(oneDoc)
})


exports.GetAll = (Model) => asyncHandler(async (req, res) => {
    try {
        const apiFeatures = new ApiFeatures(Model.find(), req.query)
            .Searching()
            .limiting()
            // .paginate()
            .filter()
            .sort()

        let results = await apiFeatures.mongooseQuery;

        // تحديد مسار الصورة وتعيين اسم الصورة في البيانات
        results = await Promise.all(results.map(async (profile) => {
            if (profile.image) {
                // قم بتعيين اسم الصورة
                profile.imageName = profile.image.split('//').pop();
            }
            return profile;
        }));

        res.status(200).send({ results: results.length, data: results });
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).send('Error processing request.');
    }
});

