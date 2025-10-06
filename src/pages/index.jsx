import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";
import { useState } from "react";
import next from "next";
import EndCard from "../components/EndCard";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const questions = [
  {
    id: 1,
    q: "আপনার মতামতের সাথে কেউ একমত না হলে -",
    a: {
      option: "তার কথাই গ্রহন করে নিবেন",
      marks: 0
    },
    b: {
      option: "তাকে বোঝাবেন",
      marks: 2
    },
    c: {
      option: "তার প্রতিবাদ করবেন",
      marks: 4
    },
    d: {
      option: "তোগো অপিনিওনের মায়রেচুদি",
      marks: 5
    }

  },
  {
    id: 2,
    q: "শাহবাগি গৃহবালকের থেকে গন্ধ আসলে - ",
    a: {
      option: "চূপ থাকবেন",
      marks: 0
    },
    b: {
      option: "'ওগো বন্ধু, তোমার কি পানির বড্ড অভাব?'",
      marks: 2
    },
    c: {
      option: "নিজে হাতে গোসল করায় দিবেন 🥵",
      marks: 4
    },
    d: {
      option: "গোয়া মারবেন",
      marks: 5
    }

  },

  {
    id: 3,
    q: "গৃহবালক যদি শাহবাগ বিশ্ববিদ্যালয়ে অধ্যায়ণরত থাকে - ",
    a: {
      option: "এতে আমার কি",
      marks: 0
    },
    b: {
      option: "'ওগো বন্ধু, তুমি কি বি ইউনিট?'",
      marks: 2
    },
    c: {
      option: "তাকে ত্যাগ করবেন",
      marks: 4
    },
    d: {
      option: "আবার গোয়াটা মারবেন",
      marks: 5
    }
  },

  {
    id: 4,
    q: "কেউ আয়রনি করতে আসলে - ",
    a: {
      option: "তার কথা মেনে নেবেন",
      marks: 0
    },
    b: {
      option: "আস বন্ধু",
      marks: 2
    },
    c: {
      option: "400 ডিগ্রি C এর লৌহদণ্ড তাহার পশ্চাতে প্রবেশ করাবেন",
      marks: 4
    },
    d: {
      option: "গোয়াটা যদি আরেকবার -",
      marks: 5
    }
  },

  {
    id: 5,
    q: "আপনার নাম কি ফাহিম?",
    a: {
      option: "জি",
      marks: 0
    },
    b: {
      option: "তাই তো জানই",
      marks: 2
    },
    c: {
      option: "না",
      marks: 4
    },
    d: {
      option: "ফাহিম কে 🥀",
      marks: 5
    }
  },


  {
    id: 6,
    q: "আপনি কি লানাদেল্রে ফ্যান",
    a: {
      option: "অবশ্যই",
      marks: 0
    },
    b: {
      option: "সে শুনে তাই আমিও শুনি 😞",
      marks: 2
    },
    c: {
      option: "শুধু রিলস এ শুনেছি",
      marks: 4
    },
    d: {
      option: "আমি কানে শুনিনা",
      marks: 5
    }
  },



  {
    id: 7,
    q: "ছেলে-মেয়ের মাঝে বন্ধুত্তের সম্পর্ক থাকতে পারে - ",
    a: {
      option: "না",
      marks: 5
    },
    b: {
      option: "মার্জিতভাবে থাকতে পারে",
      marks: 2
    },
    c: {
      option: "মেয়ে বন্ধু ই তো নাই, বলবো কিভাবে 🥀",
      marks: 4
    },
    d: {
      option: "অবশ্যই",
      marks: 0
    }
  },

  {
    id: 8,
    q: "নারীশিক্ষা সম্পর্কে মতামত - ",
    a: {
      option: "মাইয়াগো পড়াশুনা করার দরকারটাই বা কি?",
      marks: 0
    },
    b: {
      option: "ক্লাস ৫ পর্যন্ত",
      marks: 2
    },
    c: {
      option: "পরতে চাইলে পরতে দেয়া উচিত",
      marks: 4
    },
    d: {
      option: "আমি তো বউয়ের কামাই দিয়াই চলব।",
      marks: 5
    }
  },

  
  {
    id: 9,
    q: "দারিদ্র্যের সমাধান কি হতে পারে",
    a: {
      option: "দারিদ্র্যই উত্তম",
      marks: 0
    },
    b: {
      option: "দ্রুত নির্বাচন",
      marks: 2
    },
    c: {
      option: "গৃহবালকের সাথে কক্স বাজার 🥵",
      marks: 4
    },
    d: {
      option: "দরিদ্রদের উপর রোলার চালানো",
      marks: 5
    }
  },

  {
    id: 10,
    q: "আপনি কোন রাজনৈতিক দলের সমর্থক",
    a: {
      option: "লীগচোদা",
      marks: 0
    },
    b: {
      option: "টেম্পু সমিতি",
      marks: 2
    },
    c: {
      option: "পিপিনুল ভাই",
      marks: 4
    },
    d: {
      option: "ছোটবেলা থেকেই শিবিরের প্রতি আবেগ কাজ করত 🗿",
      marks: 5
    }
  },
]

const messages = {

}

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0].id);
  const [totalMarks, setTotalMarks] = useState(0);
  const [endTest, setEndTest] = useState(false)
  const [loading, setLoading] = useState(false);


  const maxMarks = questions.length * 5; 

  const reset = () => {
    setCurrentQuestion(questions[0].id);
    setTotalMarks(0);
    setEndTest(false);
  }

  const nextQuestion = (marks) => {
    setTotalMarks(prev => prev + marks)

    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      if (currentQuestion === questions.length) {
        setEndTest(true);
      } else {
        setCurrentQuestion(prev => prev + 1);
      }
    }, 300);
  }

  return (<>
    <Head>
      <title>Bangu Test 🗿</title>
      <meta property="og:image" content="/og.png" ></meta>
      <meta property="og:title" content="বাঙ্গু টেস্ট" ></meta>
    </Head>
    <Navbar reset={reset} quesNumber={currentQuestion} totalQues={questions.length} />
    {loading ? (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
      </div>
    ) : endTest ? (
      <EndCard
        score={Math.round(totalMarks * 100 / maxMarks)}
        maxMarks={maxMarks}
        obtainedMarks={totalMarks}
      />
    ) : (
      <QuestionCard
        totalMarks={totalMarks}
        setTotalMarks={setTotalMarks}
        nextQuestion={nextQuestion}
        ques={questions[currentQuestion - 1]}
      />)}
  </>);
}
