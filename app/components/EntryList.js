import Entry from './Entry'

const EntryList = ({ entries }) => {
  return (
    <ul className='w-5/6 '>
        {entries.length > 0 ? entries.map((entry) => (
            <Entry entry={entry} key={entry.id} />
        )) : ''}
    </ul>
  )
}

export default EntryList