// app/debug/firestore-data/page.js
import { db } from '../../src/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default async function FirestoreData() {
  try {
    const snapshot = await getDocs(collection(db, "posts"));
    const allDocs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return (
      <div style={{ padding: '20px', background: 'black', color: 'white', minHeight: '100vh' }}>
        <h1>Firestore Data Debug</h1>
        
        <div style={{ margin: '20px 0', padding: '10px', background: '#333' }}>
          <h3>Collection: "posts"</h3>
          <p>Total documents: {allDocs.length}</p>
          
          {allDocs.length > 0 ? (
            <div>
              <h4>Documents:</h4>
              {allDocs.map(doc => (
                <div key={doc.id} style={{ margin: '10px 0', padding: '10px', background: '#444', border: '1px solid #666' }}>
                  <strong>ID:</strong> {doc.id}<br />
                  <strong>Title:</strong> {doc.title || 'NO TITLE'}<br />
                  <strong>Slug:</strong> {doc.slug || 'NO SLUG'}<br />
                  <strong>Date:</strong> {doc.date?.toString() || 'NO DATE'}<br />
                  <strong>Date type:</strong> {typeof doc.date}<br />
                  <strong>Has toDate:</strong> {doc.date && typeof doc.date.toDate === 'function' ? 'YES' : 'NO'}<br />
                  <strong>Highlight:</strong> {doc.highlight ? 'YES' : 'NO'}<br />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ background: '#500', padding: '10px' }}>
              <h4>❌ NO DOCUMENTS FOUND IN "posts" COLLECTION</h4>
              <p>Check:</p>
              <ul>
                <li>Is your Firestore database in the correct region?</li>
                <li>Is the collection name exactly "posts"?</li>
                <li>Do you have any documents in the collection?</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ padding: '20px', background: 'black', color: 'white', minHeight: '100vh' }}>
        <h1>❌ Firestore Error</h1>
        <p>Error: {error.message}</p>
      </div>
    );
  }
}