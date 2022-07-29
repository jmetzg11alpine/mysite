import { useEffect, useRef, useState } from 'react'
import * as tf from '@tensorflow/tfjs'
import * as qna from '@tensorflow-models/qna'

const QnA = () => {
  const questionRef = useRef(null)
  const [answer, setAnswer] = useState()
  const [model, setModel] = useState(null)
  const [questionAsked, setQuestionAsked] = useState(false)
  const loadModel = async () => {
    const loadedModel = await qna.load()
    setModel(loadedModel)
    console.log('model loaded')
  }
  useEffect(() => {
    loadModel()
  }, [])
  const answerQuestion = async (e) => {
    console.log('question submitted')
    const passage =
      "Jesse is from San Diego Califonia. Jesse is a loyal worker. He is hardworking and persistent. He is married to a smart Russian lady. Jesse can speak Spanish and Russian. Jesse can code in Python really well and built this site with React. He can program in Python, and JS. He works at a software company. He works in a software company called BlueOptima in Phoenix. He is employed at the software company. He can program in python for Data Science stuff. He works in Phoenix. His job is a Data Scientist. He works as a Data Scientist. He really like his econometic courses. This site is built with React and Python Flask backend. He likes to do BJJ, play piano, and read books. Jesse lived in Moscows, Russia for 8 years and he now lives in Phoenix Arizona. He is 33 years old. He doesn't have any pets or children. He is an American. Jesse has an American passport. Jesse studied Economics at Johns Hopkins university"
    const question = questionRef.current.value
    const answers = await model.findAnswers(question, passage)
    const first_answer = answers[0]
    setAnswer(first_answer)
    setQuestionAsked(true)
  }
  return (
    <div className='container'>
      <div className='text-container'>
        <h2>Question and answer</h2>
        <p>
          This a pretrained BERT model downloaded from{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.tensorflow.org/js/models'
          >
            here.
          </a>{' '}
          It uses a text bio about me to answer questions.
        </p>
      </div>
      <div>
        {model == null ? (
          <div className='qna'>
            <div>Preparing NLP Model</div>
          </div>
        ) : (
          <div className='qna'>
            <div className='question-tag'>
              <p className='question-title'>Question: </p>
              <input className='question-input' ref={questionRef} size='60vw' />
              <button onClick={answerQuestion}>Ask</button>
            </div>
            <br />
            <div className='answer-tag'>
              <p>Answers:</p>
              {answer
                ? ` ${answer.text}`
                : questionAsked
                ? ' This info is not in his bio'
                : ''}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QnA

// https://www.youtube.com/watch?v=IO1tjm9gcIs
