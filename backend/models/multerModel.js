import multer, { diskStorage } from 'multer';
import {GridFsStorage} from "multer-gridfs-storage";

const storageEngine = diskStorage({
	destination: (req, file, cb) => {
		cb(null, './images')
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '_' + file.originalname)
	}
});
export const upload = multer({ storage: storageEngine })


// ============


// const storage = new GridFsStorage({
//     url: process.env,
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (req, file) => {
//         const match = ["image/png", "image/jpeg"];

//         if (match.indexOf(file.mimetype) === -1) {
//             const filename = `${Date.now()}-Efuet-${file.originalname}`;
//             return filename;
//         }

//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-Efuet-${file.originalname}`,
//         };
//     },
// });

// export default multer({ storage });