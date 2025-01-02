To solve this, you need to ensure that you access the data within the `.then()` block after the promise returned by `get()` has resolved:
```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  if (doc.exists) {
    console.log(doc.data().myField); // Access data here
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```
This revised code waits for the promise to fulfill before accessing `doc.data().myField`.  The `if (doc.exists)` check ensures the document exists before attempting to access its data.  Error handling is also included with `.catch()`.