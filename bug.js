The Firebase SDK may throw an error if you try to access a property of a document snapshot before the data has been fully loaded. This can happen if you try to access the data in the snapshot's `data()` method within an asynchronous callback before the promise returned by `get()` has resolved.  For example:
```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  console.log(doc.data().myField); // Error: myField may not be defined yet
});
```