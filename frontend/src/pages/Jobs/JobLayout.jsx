import JobBanner from './components/JobBanner'
import JobSection from './components/JobSection'

const JobLayout = () => {
  return (
    <div>
      <div className='bg-primary-ultra/10 pt-28'>
        <JobBanner />
      </div>

      <div>
        <JobSection />
      </div>
    </div>
  )
}

export default JobLayout