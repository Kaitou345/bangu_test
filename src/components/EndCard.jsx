import React from 'react'
import Container from './Container'

const EndCard = ({ score, obtainedMarks, maxMarks }) => {
    const getScoreQuadrant = (score, maxMarks) => {
        const quarter = maxMarks / 4;

        if (score <= quarter) {
            return {
                title: "খাটি বাঙ্গু",
                message: "নিজেকে আপনি বাসেদ মনে করেন, কিন্তু সত্যি বলছি, আপনার প্রতিটি নিঃশ্বাস এমন একরকম শক্তি রাখে যে, পাড়ার ময়লা থেকে জাতীয় অর্থনীতি পর্যন্ত সবকিছু কেঁপে ওঠে! আপনিই চদু।"
            };
        } else if (score <= 2 * quarter) {
            return {
                title: "শাহবাগি গোয়ার ব্যাটা",
                message: "আপনার বহুদুর পথ বাকি। আপনি চলার পথ প্রগ্রতির ভেক্টরের ঠিক উলটোদিকে। আপনার ভোট এর অধিকার অনতিবিল্বম্বে হরণ করতে জেনেভা দাবি জানাচ্ছে।"
            };
        } else if (score <= 3 * quarter) {
            return {
                title: "নলা",
                message: "সঠিক পথে হাঁটতে চেয়েও আপনি হাঁটছেন না। গোয়াটা মারতে চেয়েও মারছেন না। আপনিই কি সেই শাহবাগি গ্রিহবালক?"
            };
        } else if (score <= maxMarks) {
            return {
                title: "গোয়াপাগলু",
                message: "আপনার মাদ্ধমেই উন্নয়ন সম্ভব। আপনার গোয়ামারায় সকল শাহবাগি ঠাণ্ডা হয়ে যায়। আপনার মোবাইল নম্বর দিবেন, আপনাকে ৫০০ পয়সা বিকাশ করতে চাই।"
            };
        } else {
            return {
                title: "Invalid Score",
                message: "Score exceeds maximum allowed."
            };
        }
    }

    const {title, message} = getScoreQuadrant(score, 100);
    return (
        <section>
            <Container className='flex flex-col gap-7 justify-between items-center my-14 bg-white text-black rounded-[10px] p-10 '>

                <div className='flex flex-col gap-4 items-center justify-center bg-green-200 outline-2 outline-green-500 p-10 rounded-xl '>
                    <h1 className='text-4xl text-green-600'>{score}%</h1>
                    <h2 className='text-green-600 text-4xl'>{title}</h2>

                </div>
                <p className='text-xl'>You got <span className='text-yellow-800'>{obtainedMarks}</span> out of <span className='text-green-800'>{maxMarks}</span></p>
                <p className='bg-green-200 px-5 py-3 rounded-xl text-xl outline-2 outline-green-500'>
                    {message}
                </p>
            </Container>
        </section>
    )
}

export default EndCard