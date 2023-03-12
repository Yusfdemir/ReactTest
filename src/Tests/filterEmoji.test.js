import React from 'react'
import '@testing-library/jest-dom'
import { render, screen,fireEvent } from '@testing-library/react'
import emojiList from '../emojiList.json'
import App from '../App'

describe("Filter",()=>{
    let input,filterList;
    beforeEach(()=>{
        render(<App/>)
    });

    test("Emoji filter test",()=>{
        input = screen.getByRole("textbox"); // input'a ulaşalım
        const filter = "smile cat";
        filterList = emojiList.filter(it => it.keywords.toLowerCase().match(filter) || it.title.toLowerCase().match(filter) );
        // console.log(filterList); // emojiList'de filtreleme yapınca gelencek sonuc , 
        // 2 elemana sahip sonu ortaya çıkıyor aynısı input'a girilen filtre durumunda çıkmalı: 
        fireEvent.change(input, { target: { value: filter } });
        expect(screen.getAllByText(/cat/i)).toHaveLength(2);
      });
})