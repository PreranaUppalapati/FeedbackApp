import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'feedback1',
            rating: 4,
        },
        {
            id: 2,
            text: 'feedback2',
            rating: 10,
        },
        {
            id: 3,
            text: 'feedback3',
            rating: 7,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log(newFeedback)
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, upditem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? {
            ...item, ...upditem } : item))
        )
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext