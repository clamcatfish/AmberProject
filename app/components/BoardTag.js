
const Tag = ({ tag }) => {

    const themes = {
      // Personal Development
      //  Core
      "Identity": "Core",
      "Character": "Core",
      "Ego": "Core",
      "Virtue": "Core",
      "Purpose": "Core",
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
      "Leadership": "Leadership + Teamwork",
      "Teamwork": "Leadership + Teamwork",
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
      "Hopelessness": "Negative Emotion",
      "Jealousy": "Negative Emotion",
      "Negativity": "Negative Emotion",
      "Nervousness": "Negative Emotion",
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
      "Abstinence": "Addiction and Control"
    };
  
    const colors = {
      "Core": '#FF57C3',
      "Regular Activity": '#FF1993',
      "Mapping": '#FF7AAA',
      "Positive Emotion": '#FFA057',
      "Emotional Regulation": '#FF7A33',
      "Negative Emotion": '#FFBD80',
      "Motivation": '#FF7A57',
      "Zoning In": '#FF3D19',
      "Achievement": '#FFBCA8',
      "Communication": '#FF7A57',
      "Relationships": '#FF3D19',
      "Social Behaviour": '#FFA07A',
      "Leadership and Teamwork": '#FFBCA8',
      "Learning and Knowledge": '#57FFF5',
      "Creativity and Exploration": '#19FFE3',
      "Setbacks": '#57FF79',
      "Resilience": '#19FF3D',
      "Growth": '#7AFFA0',
      "Adaptation": '#A8FFBC',
      "Desires and Impulses": '#C357FF',
      "Addiction and Control": '#9319FF',
      "Health": '#577AFF',
    }
    
    const color = themes[tag]

    const handleClick = (e) => {
      console.log(e)
    }
    switch (color) {
        case 'Core':
            return (
                <div onClick={handleClick} className={` cursor-pointer rounded-2xl bg-white text-Core px-1 hover:bg-Core hover:text-white border-Core border`}>{tag}</div>
              )
        case 'Regular Activity':
            return (
                <div onClick={handleClick} className={` cursor-pointer rounded-2xl bg-white text-Regular_Activity px-1 hover:bg-Regular_Activity hover:text-white border-Regular_Activity border`}>{tag}</div>
              )
        case 'Mapping':
            return (
                <div onClick={handleClick} className={` cursor-pointer rounded-2xl bg-white text-Mapping px-1 hover:bg-Mapping hover:text-white border-Mapping border`}>{tag}</div>
              )
        case 'Positive Emotion':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Positive_Emotion px-1 hover:bg-Positive_Emotion hover:text-white border-Positive_Emotion border`}>{tag}</div>
              )
        case 'Emotional Regulation':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Emotional_Regulation px-1 hover:bg-Emotional_Regulation hover:text-white border-Emotional_Regulation border`}>{tag}</div>
              )
        case 'Negative Emotion':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Negative_Emotion px-1 hover:bg-Negative_Emotion hover:text-white border-Negative_Emotion border`}>{tag}</div>
              )
        case 'Motivation':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Motivation px-1 hover:bg-Motivation hover:text-white border-Motivation border`}>{tag}</div>
              )
        case 'Zoning In':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Zoning_In px-1 hover:bg-Zoning_In hover:text-white border-Zoning_In border`}>{tag}</div>
              )
        case 'Achievement':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Achievement px-1 hover:bg-Achievement hover:text-white border-Achievement border`}>{tag}</div>
              )
        case 'Communication':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Communication px-1 hover:bg-Communication hover:text-white border-Communication border`}>{tag}</div>
              )
        case 'Relationships':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Relationships px-1 hover:bg-Relationships hover:text-white border-Relationships border`}>{tag}</div>
              )
        case 'Social Behaviour':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Social_Behaviour px-1 hover:bg-Social_Behaviour hover:text-white border-Social_Behaviour border`}>{tag}</div>
              )
        case 'Leadership and Teamwork':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Leadership_and_Teamwork px-1 hover:bg-Leadership_and_Teamwork hover:text-white border-Leadership_and_Teamwork border`}>{tag}</div>
              )
        case 'Learning and Knowledge':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Learning_and_Knowledge px-1 hover:bg-Learning_and_Knowledge hover:text-white border-Learning_and_Knowledge border`}>{tag}</div>
              )
        case 'Creativity and Exploration':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Creativity_and_Exploration px-1 hover:bg-Creativity_and_Exploration hover:text-white border-Creativity_and_Exploration border`}>{tag}</div>
              )
        case 'Setbacks':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Setbacks px-1 hover:bg-Setbacks hover:text-white border-Setbacks border`}>{tag}</div>
              )
        case 'Resilience':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Resilience px-1 hover:bg-Resilience hover:text-white border-Resilience border`}>{tag}</div>
              )
        case 'Growth':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Growth px-1 hover:bg-Growth hover:text-white border-Growth border`}>{tag}</div>
              )
        case 'Adaptation':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Adaptation px-1 hover:bg-Adaptation hover:text-white border-Adaptation border`}>{tag}</div>
              )
        case 'Desires and Impulses':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Desires_and_Impulses px-1 hover:bg-Desires_and_Impulses hover:text-white border-Desires_and_Impulses border`}>{tag}</div>
              )
        case 'Addiction and Control':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Addiction_and_Control px-1 hover:bg-Addiction_and_Control hover:text-white border-Addiction_and_Control border`}>{tag}</div>
              )
        case 'Health':
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-Health px-1 hover:bg-Health hover:text-white border-Health border`}>{tag}</div>
              )
        default:
            return (
                <div className={` cursor-pointer rounded-2xl bg-white text-gray-700 px-1 hover:bg-gray-700 hover:text-white`}>{tag}</div>
              )
    }
        

  }
  
  
  export default Tag