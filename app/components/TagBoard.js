'use client'

import { useState, useEffect } from "react";
import BoardTag from "./BoardTag";
import BoardTagList from "./BoardTagList";
import SearchForm from "./SearchForm";


const TagBoard = () => {
    const personalDevelopment = {
        "Core": [
          "Character",
          "Ego",
          "Identity",
          "Strength",
          "Virtue"
        ],
        "Regular Activity": [
          "Behaviour",
          "Consistency",
          "Habits",
          "Media Consumption",
          "Practice",
          "Routine",
          "Repetition"
        ],
        "Mapping": [
          "Goal Setting",
          "Organization",
          "Planning",
          "Reflection",
          "Review",
          "Time",
          "Visualization"
        ]
      };
      
      const social = {
        "Communication": [
          "Arguing",
          "Body Language",
          "Communication",
          "Criticism",
          "Deceit",
          "Socializing"
        ],
        "Relationships": [
          "Dating",
          "Intimacy",
          "Marriage",
          "Parenting"
        ],
        "Social Behaviour": [
            "Empathy",
            "Forgiveness",
            "Giving",
            "Gratitude",
            "Honesty",
            "Humility",
          "Kindness",
          "Patience",
          "Responsibility"
        ],
        "Leadership and Teamwork": [
          "Leadership",
          "Teamwork"
        ]
      };
      
      const emotionalState = {
        "Positive Emotion": [
          "Calmness",
          "Confidence",
          "Enjoyment",
          "Happiness",
          "Positivity"
        ],
        "Emotional Regulation": [
            "Acceptance",
            "Attitude",
            "Awareness",
          "Clarity",
          "Control",
          "Meditation",
          "Mindfulness",
          "Mindset",
          "Revenge"
        ],
        "Negative Emotion": [
          "Anger",
          "Anxiety",
          "Bitterness",
          "Contempt",
          "Cowardice",
          "Depression",
          "Despair",
          "Emotion",
          "Entitlement",
          "Fear",
          "Frustration",
          "Hatred",
          "Hope",
          "Jealousy",
          "Negativity",
          "Nervosity",
          "Pride",
          "Regret",
          "Resentment",
          "Rumination",
          "Sadness",
          "Worrying"
        ]
      };
      
      const cognitiveAbilities = {
        "Learning and Knowledge": [
            "Judgement",
            "Knowledge",
          "Learning",
          "Memory",
          "Perception",
          "Understanding"
        ],
        "Creativity and Exploration": [
          "Creativity",
          "Exploration"
        ]
      };
      
      const wellBeing = {
        "Health": [
            "Age",
          "Sleep",
          "Well Being"
        ]
      };
      
      const productivity = {
        "Motivation": [
            "Action",
            "Ambition",
            "Belief",
          "Motivation",
          "Passion",
          "Purpose"
        ],
        "Zoning In": [
            "Attention",
          "Decision Making",
          "Discipline",
          "Distraction",
          "Focus",
          "Present",
          "Procrastination",
          "Thinking",
          "Will",
          "Willpower"
        ],
        "Achievement": [
            "Achievement",
            "Expectations",
            "Hard Work",
            "Talent",
            "Praise",
            "Productivity",
            "Success",
          "Working"
        ]
      };
      
      const adversityGrowth = {
        "Setbacks": [
            "Challenge",
          "Difficulty",
          "Discomfort",
          "Failure",
          "Hardship",
          "Pain",
          "Stress",
          "Struggle",
          "Suffering"
        ],
        "Resilience": [
            "Dedication",
            "Determination",
          "Mental Fortitude",
          "Endurance",
          "Perseverance",
          "Persistence"
        ],
        "Growth": [
            "Competition",
            "Complacency",
          "Growth",
          "Improvement",
          "Performance",
          "Sacrifice"
        ],
        "Adaptation": [
          "Attachment",
          "Change",
          "Choice",
          "Loss"
        ]
      };
      
      const addiction = {
        "Desires and Impulses": [
            "Addiction",
          "Desire",
          "Impulse",
          "Indulgence",
          "Pleasure",
          "Temptation"
        ],
        "Addiction and Control": [
            "Abstinence",
          "Resistance",
          "Self-Control"
        ]
      };
      
      const tags = {
        "Personal Development": personalDevelopment,
        "Social": social,
        "Emotional State": emotionalState,
        "Cognitive Abilities": cognitiveAbilities,
        "Well Being": wellBeing,
        "Productivity": productivity,
        "Adversity/Growth": adversityGrowth,
        "Addiction": addiction
      };
      
      const [allClicked, setAllClicked] = useState([{}])
      const [names, setNames] = useState([])

      const handleData = (t) => {
        setAllClicked((prevState) => {
          const existingIndex = prevState.findIndex(item => item.theme === t.theme)
          if (existingIndex !== -1) {
            return prevState.map((item, index) =>
              index === existingIndex ? t : item
            )
          } else {
            return [...prevState, t]
          }
        })
      }
      
      useEffect(() => {
        let names = []
        allClicked.forEach(item => {
          if (item.names) {
            item.names.forEach(name => {
              names.push(name)
            })
          }
        })
        console.log(names)
        setNames(names)
      }, [allClicked])
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-row border-black border-2 bg-white w-fit px- 4 mb-8 justify-center pt-2">
          {/*category (Personal Development) */}
          <div className="flex flex-col w-24">
              <hr></hr>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Mapping font-semibold">
                      Mapping
                  </div>
                  <div className="">
                      <BoardTagList tags={personalDevelopment["Mapping"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Core font-semibold">
                      Core
                  </div>
                  <div className="">
                      <BoardTagList tags={personalDevelopment["Core"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Regular_Activity font-semibold">
                    Routine
                  </div>
                  <div className="">
                      <BoardTagList tags={personalDevelopment["Regular Activity"]} onData={handleData} />
                  </div>
              </div>
          </div>

          {/*category (Emotional State) */}
          <div className="flex flex-col w-24">
              <hr></hr>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Positive_Emotion font-semibold">
                      Positivity
                  </div>
                  <div className="">
                      <BoardTagList tags={emotionalState["Positive Emotion"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Emotional_Regulation font-semibold">
                      Regulation
                  </div>
                  <div className="">
                      <BoardTagList tags={emotionalState["Emotional Regulation"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Health font-semibold">
                      Health
                  </div>
                  <div className="">
                      <BoardTagList tags={wellBeing["Health"]} onData={handleData} />
                  </div>
              </div>
          </div>

          <div className="flex flex-col w-24">
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Negative_Emotion font-semibold">
                      Negativity
                  </div>
                  <div className="">
                      <BoardTagList tags={emotionalState["Negative Emotion"]} onData={handleData} />
                  </div>
              </div>
          </div>
          
          {/*category (Motivation) */}
          <div className="flex flex-col w-28">
              <hr></hr>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Motivation font-semibold">
                      Motivation
                  </div>
                  <div className="">
                      <BoardTagList tags={productivity["Motivation"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Zoning_In font-semibold">
                      Zoning In
                  </div>
                  <div className="">
                      <BoardTagList tags={productivity["Zoning In"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Leadership_and_Teamwork font-semibold">
                      Team
                  </div>
                  <div className="">
                      <BoardTagList tags={social["Leadership and Teamwork"]} onData={handleData} />
                  </div>
              </div>
          </div>
          
          {/*category (Social Behaviour) */}
          <div className="flex flex-col w-28">
              <div className="flex flex-col ">
                  <div className="rounded-2xl text-Achievement font-semibold">
                      Achievement
                  </div>
                  <div className="">
                      <BoardTagList tags={productivity["Achievement"]} onData={handleData} />
                  </div>
              </div>
              <hr></hr>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Communication font-semibold">
                      Comm.
                  </div>
                  <div className="">
                      <BoardTagList tags={social["Communication"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl text-Relationships font-semibold">
                      Relationships
                  </div>
                  <div className="">
                      <BoardTagList tags={social["Relationships"]} onData={handleData} />
                  </div>
              </div>
          </div>
          
          {/*category (Cognitive Abilities) */}
          <div className="flex flex-col w-28">
              <hr></hr>
              <div className="flex flex-col ">
                  <div className="rounded-2xl text-Learning_and_Knowledge font-semibold">
                      Learning and Knowledge
                  </div>
                  <div className="">
                      <BoardTagList tags={cognitiveAbilities["Learning and Knowledge"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl text-Creativity_and_Exploration font-semibold">
                      Creativity and Exploration
                  </div>
                  <div className="">
                      <BoardTagList tags={cognitiveAbilities["Creativity and Exploration"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl text-Social_Behaviour font-semibold">
                      Social Behaviour
                  </div>
                  <div className="">
                      <BoardTagList tags={social["Social Behaviour"]} onData={handleData} />
                  </div>
              </div>
          </div>
          
          {/*category (Adversity and Growth) */}
          <div className="flex flex-col w-24">
              <hr></hr>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Setbacks font-semibold">
                      Setbacks
                  </div>
                  <div className="">
                      <BoardTagList tags={adversityGrowth["Setbacks"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Resilience font-semibold">
                      Resilience
                  </div>
                  <div className="">
                      <BoardTagList tags={adversityGrowth["Resilience"]} onData={handleData} />
                  </div>
              </div>
              <hr></hr>
              <div className="flex flex-col ">
                  <div className="rounded-2xl text-Addiction_and_Control font-semibold">
                      Addicton and Control
                  </div>
                  <div className="">
                      <BoardTagList tags={addiction["Addiction and Control"]} onData={handleData} />
                  </div>
              </div>
          </div>

          <div className="flex flex-col w-24">
            <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Growth font-semibold">
                      Growth
                  </div>
                  <div className="">
                      <BoardTagList tags={adversityGrowth["Growth"]} onData={handleData} />
                  </div>
              </div>
              <div className="flex flex-col ">
                  <div className="rounded-2xl px-2 text-Adaptation font-semibold">
                      Adaptation
                  </div>
                  <div className="">
                      <BoardTagList tags={adversityGrowth["Adaptation"]} onData={handleData} />
                  </div>
              </div>
              <hr></hr>
              <div className="flex flex-col ">
                  <div className="rounded-2xl text-Desires_and_Impulses font-semibold">
                      Desires and Impulses
                  </div>
                  <div className="">
                      <BoardTagList tags={addiction["Desires and Impulses"]} onData={handleData} />
                  </div>
              </div>
          </div>
          
          

          

      </div>
      <div className="w-full">
        <SearchForm names={names} />  
      </div>
    </div>
  )
}

export default TagBoard