import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'
import emojiList from '../emojiList.json'
describe('Emoji List must be rendered',()=>{
    beforeAll(()=>{
        render(<App />)
    })
    test("emoji list render", () => {
        let emojies = emojiList.slice(0, 20);
        emojies.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    })

})