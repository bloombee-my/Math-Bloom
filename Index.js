// Example initialization for web/hybrid wrappers
import { initializeApp } from "firebase/app";
import { initializeAuth, indexedDBLocalPersistence } from "firebase/auth";
import { getDatabase, enableLogging } from "firebase/database";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// Enable disk persistence in native clients so progress 
// is cached even if the app completely closes without internet.