import { collection, addDoc, getFirestore, orderBy, query, serverTimestamp } from 'firebase/firestore'
import firebase_app from './Config'

export const collectionRef = collection(getFirestore(firebase_app), 'users')
export const collectionRefOrder = query(collectionRef, orderBy('timestamp', 'asc'))
export async function addCollection (name, message, email) {
    try {
        addDoc(collectionRef, {
            name: name,
            message: message,
            email: email,
            timestamp: serverTimestamp()
        })
    } catch (error) {
        console.error(error)
    }
}
