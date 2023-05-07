import { collection, addDoc, Timestamp, getFirestore } from 'firebase/firestore'
import firebase_app from './Config'

export const collectionRef = collection(getFirestore(firebase_app), 'users')
export async function addCollection (name, message) {
    try {
        addDoc(collectionRef, {
            name: name,
            message: message,
            timestamp: new Date().toLocaleString()
        })
    } catch (error) {
        console.error(error)
    }
}
