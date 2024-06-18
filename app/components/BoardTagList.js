import { useState, useEffect } from "react";
import BoardTag from "./BoardTag";

const BoardTagList = ({ tags, onData }) => {
  const [clickedIndices, setClickedIndices] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleClick = (index) => {
    if (clickedIndices.includes(index)) {
      setClickedIndices(clickedIndices.filter((i) => i !== index))
    } else {
      setClickedIndices([...clickedIndices, index])
    }
  }
    useEffect(() => {
      const names = clickedIndices.map(c => tags[c])
      const obj = {
        theme: theme,
        names: names
      }
      // console.log(names)
      onData(obj)
    }, [clickedIndices, tags, onData, theme])
    
    const themes = {
      // Personal Development
      //  Core
      "Identity": "Core",
      "Character": "Core",
      "Ego": "Core",
      "Virtue": "Core",
      "Strength": "Core",
      //  Regular Activity
      "Habits": "Regular Activity",
      "Routine": "Regular Activity",
      "Consistency": "Regular Activity",
      "Practice": "Regular Activity",
      "Repetition": "Regular Activity",
      "Behaviour": "Regular Activity",
      "Media Consumption": "Regular Activity",
      //  Mapping
      "Goal Setting": "Mapping",
      "Planning": "Mapping",
      "Visualization": "Mapping",
      "Organization": "Mapping",
      "Time": "Mapping",
      "Review": "Mapping",
      "Reflection": "Mapping",
      // Social
      //  Communication
      "Communication": "Communication",
      "Socializing": "Communication",
      "Body Language": "Communication",
      "Arguing": "Communication",
      "Criticism": "Communication",
      "Deceit": "Communication",
      //  Relationships
      "Dating": "Relationships",
      "Intimacy": "Relationships",
      "Marriage": "Relationships",
      "Parenting": "Relationships",
      //  Social Behaviour
      "Forgiveness": "Social Behaviour",
      "Empathy": "Social Behaviour",
      "Kindness": "Social Behaviour",
      "Patience": "Social Behaviour",
      "Humility": "Social Behaviour",
      "Honesty": "Social Behaviour",
      "Giving": "Social Behaviour",
      "Gratitude": "Social Behaviour",
      "Responsibility": "Social Behaviour",
      //  Leadership + Teamwork
      "Leadership": "Leadership and Teamwork",
      "Teamwork": "Leadership and Teamwork",
      // Emotional State
      //  Positive Emotion
      "Calmness": "Positive Emotion",
      "Confidence": "Positive Emotion",
      "Enjoyment": "Positive Emotion",
      "Happiness": "Positive Emotion",
      "Positivity": "Positive Emotion",
      //  Emotional Regulation
      "Clarity": "Emotional Regulation",
      "Mindfulness": "Emotional Regulation",
      "Meditation": "Emotional Regulation",
      "Acceptance": "Emotional Regulation",
      "Control": "Emotional Regulation",
      "Attitude": "Emotional Regulation",
      "Mindset": "Emotional Regulation",
      "Awareness": "Emotional Regulation",
      "Revenge": "Emotional Regulation",
      // Negative Emotion
      "Anger": "Negative Emotion",
      "Anxiety": "Negative Emotion",
      "Bitterness": "Negative Emotion",
      "Contempt": "Negative Emotion",
      "Cowardice": "Negative Emotion",
      "Depression": "Negative Emotion",
      "Despair": "Negative Emotion",
      "Emotion": "Negative Emotion",
      "Entitlement": "Negative Emotion",
      "Fear": "Negative Emotion",
      "Frustration": "Negative Emotion",
      "Hatred": "Negative Emotion",
      "Hope": "Negative Emotion",
      "Jealousy": "Negative Emotion",
      "Negativity": "Negative Emotion",
      "Nervosity": "Negative Emotion",
      "Pride": "Negative Emotion",
      "Regret": "Negative Emotion",
      "Resentment": "Negative Emotion",
      "Rumination": "Negative Emotion",
      "Sadness": "Negative Emotion",
      "Worrying": "Negative Emotion",
      // Cognitive Abilities
      //  Learning and Knowledge
      "Learning": "Learning and Knowledge",
      "Knowledge": "Learning and Knowledge",
      "Perception": "Learning and Knowledge",
      "Judgement": "Learning and Knowledge",
      "Memory": "Learning and Knowledge",
      "Understanding": "Learning and Knowledge",
      //  Creativity and Exploration
      "Creativity": "Creativity and Exploration",
      "Exploration": "Creativity and Exploration",
      // Well Being
      //  Health
      "Sleep": "Health",
      "Well Being": "Health",
      "Age": "Health",
      // Productivity
      //  Motivation
      "Motivation": "Motivation",
      "Action": "Motivation",
      "Ambition": "Motivation",
      "Belief": "Motivation",
      "Passion": "Motivation",
      "Purpose": "Motivation",
      //  Zoning In
      "Decision Making": "Zoning In",
      "Focus": "Zoning In",
      "Distraction": "Zoning In",
      "Procrastination": "Zoning In",
      "Attention": "Zoning In",
      "Discipline": "Zoning In",
      "Present": "Zoning In",
      "Thinking": "Zoning In",
      "Will": "Zoning In",
      "Willpower": "Zoning In",
      //  Achievement
      "Productivity": "Achievement",
      "Working": "Achievement",
      "Hard Work": "Achievement",
      "Talent": "Achievement",
      "Success": "Achievement",
      "Achievement": "Achievement",
      "Expectations": "Achievement",
      "Praise": "Achievement",
      // Adversity/Growth
      //  Setbacks
      "Difficulty": "Setbacks",
      "Hardship": "Setbacks",
      "Pain": "Setbacks",
      "Discomfort": "Setbacks",
      "Struggle": "Setbacks",
      "Challenge": "Setbacks",
      "Failure": "Setbacks",
      "Stress": "Setbacks",
      "Suffering": "Setbacks",
      // Resilience
      "Mental Fortitude": "Resilience",
      "Perseverance": "Resilience",
      "Endurance": "Resilience",
      "Persistence": "Resilience",
      "Determination": "Resilience",
      "Dedication": "Resilience",
      //  Growth
      "Growth": "Growth",
      "Sacrifice": "Growth",
      "Improvement": "Growth",
      "Complacency": "Growth",
      "Competition": "Growth",
      "Performance": "Growth",
      //  Adaptation
      "Attachment": "Adaptation",
      "Change": "Adaptation",
      "Choice": "Adaptation",
      "Loss": "Adaptation",
      // Addiction
      //  Desires and Impulses
      "Desire": "Desires and Impulses",
      "Impulse": "Desires and Impulses",
      "Temptation": "Desires and Impulses",
      "Indulgence": "Desires and Impulses",
      "Pleasure": "Desires and Impulses",
      "Addiction": "Desires and Impulses",
      //  Addiction and Control
      "Resistance": "Addiction and Control",
      "Self-Control": "Addiction and Control",
      "Abstinence": "Addiction and Control",
  };
  
  const theme = themes[tags[0]]  

  const colors = {
    "Core": "#FF57C3",
    "Regular Activity": "#FF1993",
    "Mapping": "#FF7AAA",
    "Positive Emotion": "#FFA057",
    "Emotional Regulation": "#FF7A33",
    "Negative Emotion": "#FFBD80",
    "Motivation": "#FF6666",
    "Zoning In": "#FF0000",
    "Achievement": "#CC0000",
    "Communication": '#6699FF',
    "Relationships": '#477BFF',
    "Social Behaviour": '#3369FF',
    "Leadership and Teamwork": '#1F57FF',
    "Learning and Knowledge": "#00eed1",
    "Creativity and Exploration": "#00d2b8",
    "Setbacks": '#00E02D',
    "Resilience": "#00d221",
    "Growth": '#2EB800',
    "Adaptation": '#248F00',
    "Desires and Impulses": "#C357FF",
    "Addiction and Control": "#9319FF",
    "Health": "#FF30FF",
  };

  return (
    <ul>
      {tags.length > 0
        ? tags.map((tag, index) => {
            let color = colors[themes[tag]]
            const isClicked = clickedIndices.includes(index)
            const isHovered = hoveredIndex === index
            return (
                <li
                    tag={tag}
                    key={index}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="cursor-pointer rounded-2xl bg-white px-2 py-1 border w-fit text-xs"
                    style={{
                      color: isClicked || isHovered ? 'white' : color,
                      backgroundColor: isClicked || isHovered ? color : '',
                      borderColor: isClicked ? 'white' : color
                    }}
                >{tag}</li>
            )
            })
        : ""}
    </ul>
  );
};

export default BoardTagList;
