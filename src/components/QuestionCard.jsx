import React from 'react'
import Container
    from './Container'
import { GoQuestion } from "react-icons/go";

const QuestionCard = ({ ques, totalMarks, setTotalMarks, nextQuestion }) => {
    return (
        <section>
            <Container className='my-14 bg-white text-gray-700 rounded-[10px] p-10'>
                <h2 className='flex items-center justify-start gap-7 text-xl md:text-4xl px-5 font-semibold py-7'> <GoQuestion className='h-16 w-16'/> {ques.q}</h2>
                <div>
                    <ul>
                        <li onClick={() => nextQuestion(ques.a.marks)} className='flex gap-7 justify-start items-center cursor-pointer active:bg-green-200 hover:bg-green-200 rounded-[15px] py-6 px-7'>
                            <span className='w-14 h-14 font-bold text-xl flex items-center justify-center rounded-full outline-4 outline-green-400'>A</span>
                            <span className='text-xl '>{ques.a.option}</span>
                        </li>

                        <li onClick={() => nextQuestion(ques.b.marks)} className='flex gap-7 justify-start items-center cursor-pointer active:bg-green-200 hover:bg-green-200 rounded-[15px] py-6 px-7'>
                            <span className='w-14 h-14 font-bold text-xl flex items-center justify-center rounded-full outline-4 outline-green-400'>B</span>
                            <span className='text-xl '>{ques.b.option}</span>
                        </li>

                        <li onClick={() => nextQuestion(ques.c.marks)} className='flex gap-7 justify-start items-center cursor-pointer active:bg-green-200 hover:bg-green-200 rounded-[15px] py-6 px-7'>
                            <span className='w-14 h-14 font-bold text-xl flex items-center justify-center rounded-full outline-4 outline-green-400'>C</span>
                            <span className='text-xl '>{ques.c.option}</span>
                        </li>

                        <li onClick={() => nextQuestion(ques.d.marks)} className='flex gap-7 justify-start items-center cursor-pointer active:bg-green-200 hover:bg-green-200 rounded-[15px] py-6 px-7'>
                            <span className='w-14 h-14 font-bold text-xl flex items-center justify-center rounded-full outline-4 outline-green-400'>D</span>
                            <span className='text-xl '>{ques.d.option}</span>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default QuestionCard