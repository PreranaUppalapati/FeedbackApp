import { useContext, useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'


function FBForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    }, [feedbackEdit]);
    
    const handleTextChange = ({target: {value} }) => {
            if (value === '') {
                setBtnDisabled(true)
                setMessage(null)
            } else if (text !== '' && text.trim().length <= 10) {
                setMessage('Minimum 10 characters')
                setBtnDisabled(true)
            }
            else {
                setBtnDisabled(false)
                setMessage(null)
            }
        setText(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text, 
                rating,
            }

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }
            

            setBtnDisabled(true)
            setRating(10)
            setText(' ')
        }
    }

    return (
            <Card>
                <form onSubmit={handleSubmit}>
                    <h2>How do you like our service?</h2>
                    <RatingSelect select={(rating) => setRating( rating )}/>
                    <div className='input-group'>
                        <input 
                        onChange ={handleTextChange} 
                        type='text' 
                        placeholder='Write a review'/>
                        <Button type = 'submit' isDisabled={btnDisabled}>
                            Send
                        </Button>
                    </div>
                    {message && <div className='message'> { message } </div>}
                </form>
            </Card>
    )

}
export default FBForm
