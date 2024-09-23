// config/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Đây là thông tin bạn lấy từ Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCFxzH36u1MGT0wIZmhAxdbHZXHCSwvem0",
    authDomain: "th4-fb.firebaseapp.com",
    projectId: "th4-fb",
    storageBucket: "th4-fb.appspot.com",
    messagingSenderId: "250717067000",
    appId: "1:250717067000:web:9abb1485c524c1bfd7cd0d",
    measurementId: "G-FN777T3P4G"
  };

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Cấu hình Firebase Authentication
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Cấu hình Firestore (nếu dùng cơ sở dữ liệu)
const db = getFirestore(app);

// Cấu hình Firebase Storage (nếu dùng lưu trữ tệp)
const storage = getStorage(app);

export { auth, db, storage };
