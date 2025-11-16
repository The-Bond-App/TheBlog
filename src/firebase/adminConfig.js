// src/lib/firebaseAdmin.js
let adminDb = null;

export async function getAdminDb() {
  // Only run on server
  if (typeof window !== "undefined") {
    throw new Error("getAdminDb() should only be called on the server.");
  }

  if (adminDb) return adminDb;

  // dynamic import delays loading firebase-admin until runtime (and avoids bundling issues)
  const admin = await import('firebase-admin');

  if (!admin.apps?.length) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    let privateKey = process.env.FIREBASE_PRIVATE_KEY;

    if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
      const sa = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
      privateKey = sa.private_key;
    }

    if (privateKey) privateKey = privateKey.replace(/\\n/g, '\n');

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }

  adminDb = admin.firestore();
  return adminDb;
}
