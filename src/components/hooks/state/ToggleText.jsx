import React, { useState } from 'react'


let text=`  Virat Kohli (Hindi: [ʋɪˈɾɑːʈ ˈkoːɦliː] (listen); born 5 November 1988) is an Indian international cricketer and former captain of the India national cricket team. Widely regarded as one of the greatest batsmen of all time, Kohli plays as a right-handed batter for Royal Challengers Bangalore in the Indian Premier League and for Delhi in domestic Indian cricket. With 40 wins out of 68 tests, Kohli is India's most successful test captain, and one of the most successful test captains of all time, behind only Graeme Smith, Ricky Ponting and Steve Waugh.

Kohli made his Test debut in 2011.[4] He reached the number one spot in the ICC rankings for ODI batsmen for the first time in 2013.[5]  He has won Man of the Tournament twice at the ICC World Twenty20 (in 2014 and 2016). He is also the leading run scorer of all time in T20 Internationals as well as T20 World Cups.

Kohli has been the recipient of multiple awards– most notably the Sir Garfield Sobers Trophy (ICC Men's Cricketer of the Decade): 2011–2020; Sir Garfield Sobers Trophy (ICC Cricketer of the Year) in 2017 and 2018; ICC Test Player of the Year (2018); ICC ODI Player of the Year (2012, 2017, 2018) and Wisden Leading Cricketer in the World (2016, 2017 and 2018).[6] At the national level, he was awarded the Arjuna Award in 2013, the Padma Shri under the sports category in 2017[7] and the Rajiv Gandhi Khel Ratna award, the highest sporting honour in India, in 2018.[8]

In 2016, he was ranked as one of the world's most famous athletes by ESPN[9] and one of the most valuable athlete brands by Forbes.[10] In 2018, Time magazine named him as one of the 100 most influential people in the world.[11] In 2020, he was ranked 66th in Forbes list of the top 100 highest-paid athletes in the world for the year 2020 with estimated earnings of over $26 million.[12]  Virat Kohli (Hindi: [ʋɪˈɾɑːʈ ˈkoːɦliː] (listen); born 5 November 1988) is an Indian international cricketer and former captain of the India national cricket team. Widely regarded as one of the greatest batsmen of all time, Kohli plays as a right-handed batter for Royal Challengers Bangalore in the Indian Premier League and for Delhi in domestic Indian cricket. With 40 wins out of 68 tests, Kohli is India's most successful test captain, and one of the most successful test captains of all time, behind only Graeme Smith, Ricky Ponting and Steve Waugh.

Kohli made his Test debut in 2011.[4] He reached the number one spot in the ICC rankings for ODI batsmen for the first time in 2013.[5]  He has won Man of the Tournament twice at the ICC World Twenty20 (in 2014 and 2016). He is also the leading run scorer of all time in T20 Internationals as well as T20 World Cups.

Kohli has been the recipient of multiple awards– most notably the Sir Garfield Sobers Trophy (ICC Men's Cricketer of the Decade): 2011–2020; Sir Garfield Sobers Trophy (ICC Cricketer of the Year) in 2017 and 2018; ICC Test Player of the Year (2018); ICC ODI Player of the Year (2012, 2017, 2018) and Wisden Leading Cricketer in the World (2016, 2017 and 2018).[6] At the national level, he was awarded the Arjuna Award in 2013, the Padma Shri under the sports category in 2017[7] and the Rajiv Gandhi Khel Ratna award, the highest sporting honour in India, in 2018.[8]

In 2016, he was ranked as one of the world's most famous athletes by ESPN[9] and one of the most valuable athlete brands by Forbes.[10] In 2018, Time magazine named him as one of the 100 most influential people in the world.[11] In 2020, he was ranked 66th in Forbes list of the top 100 highest-paid athletes in the world for the year 2020 with estimated earnings of over $26 million.[12]`


function ToggleText() {

   
    let [toggle,settoggle]=useState(true);

    let toggleState=()=>
    {
        settoggle(!toggle)
    }


  return (
    <div>
        <p>
            {toggle?text.slice(0,1000)+".........":text} <button onClick={toggleState}>{toggle?"Read More":"Read Less"}</button>
        </p>
        
    </div>
  )
}

export default ToggleText