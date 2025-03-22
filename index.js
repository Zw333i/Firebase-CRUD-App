import { db } from "./firebaseConfig.js"; // Import Firestore instance
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

// Reference to "users" collection in Firestore
const usersCollection = collection(db, "users");

// ✅ CREATE: Add a new user to Firestore
async function addUser(name, email) {
    try {
        const docRef = await addDoc(usersCollection, { name, email });
        console.log("User added with ID:", docRef.id);
    } catch (error) {
        console.error("Error adding user:", error);
    }
}

// ✅ READ: Get all users from Firestore
async function getUsers() {
    try {
        const querySnapshot = await getDocs(usersCollection);
        querySnapshot.forEach((doc) => {
            console.log(`ID: ${doc.id} | Name: ${doc.data().name} | Email: ${doc.data().email}`);
        });
    } catch (error) {
        console.error("Error retrieving users:", error);
    }
}

// ✅ UPDATE: Update an existing user
async function updateUser(userId, newName) {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, { name: newName });
        console.log("User updated successfully!");
    } catch (error) {
        console.error("Error updating user:", error);
    }
}

// ✅ DELETE: Delete a user by ID
async function deleteUser(userId) {
    try {
        const userRef = doc(db, "users", userId);
        await deleteDoc(userRef);
        console.log("User deleted successfully!");
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

export { addUser, getUsers, updateUser, deleteUser };

// 🔹 Example Calls (Uncomment to test)
// await addUser("John Doe", "johndoe@example.com");
// await getUsers();
// await updateUser("DOCUMENT_ID_HERE", "Updated Name");
// await deleteUser("DOCUMENT_ID_HERE");
