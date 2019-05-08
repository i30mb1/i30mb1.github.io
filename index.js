
var db = firebase.firestore();
function storeData() {
db.collection("clients").doc("+n7").set({name:"done"})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}
