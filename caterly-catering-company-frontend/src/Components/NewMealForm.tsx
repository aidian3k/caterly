import { useState } from "react"
import "./NewMealForm.scss"
import { AddMeal } from "./MealService"

export default function NewMealForm() {
    const [MealName, setMealName] = useState("")
    const [MealDescription, setMealDescription] = useState("")
    const [MealPrice, setMealPrice] = useState("")
    const [MealPhoto, setMealPhoto] = useState("")

    const [ErrorMsg, setErrorMsg] = useState("")

    const onSubmit = () => {
        console.log("dzieje sie")
/*      AddMeal(MealName, MealDescription, parseFloat(MealPrice))
        .then((resp) =>
        {

        }).catch((err) =>
        {
            setErrorMsg("Something went wrong...")
        })*/
    }

    return (<>
        <div className="new-meal-form-container">
            <h2>Add new meal form</h2>
            <div className="error-msg-container">
                <div className="error-msg">
                    {ErrorMsg}
                </div>
            </div>
            <div className="new-meal-form">
                <div className="new-meal-form-section"> 
                    <label className="input-label">Name of the food</label>
                    <input className="text-input" type="text" value={MealName} onChange={(e) => setMealName(e.target.value)}/>
                </div>
                <div className="new-meal-form-section"> 
                    <label className="input-label">Description</label>
                    <textarea className="text-area-input" value={MealDescription} onChange={(e) => setMealDescription(e.target.value)}/>
                </div>
                <div className="new-meal-form-section"> 
                    <label className="input-label">Price</label>
                    <input className="text-input" type="text" value={MealPrice} onChange={(e) => setMealPrice(e.target.value)}/>
                </div>
                <div className="new-meal-form-section"> 
                    <label className="input-label">Photo</label>
                    <input className="text-input" type="file" value={MealPhoto} onChange={(e) => setMealPhoto(e.target.value)}/>
                </div> 
                <div className="new-meal-form-btns">
                    <button className="cancle-btn">Cancle</button>
                    <button className="submit-btn" onClick ={onSubmit}>Submit</button>
                </div>
            </div>            
        </div>
    </>)
}