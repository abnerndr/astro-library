import Dashboard from '@/components/Common/Dashboard/Dasboard';
import Step from '@/components/Common/Steps/Step';
import IFrameVideoOverlay from 'iframe-video-overlay';
const tabs = [
  { name: 'NLW E-sports', href: '#', count: '6', current: true },
  { name: 'Phone Screening', href: '#', count: '6', current: false },
  { name: 'Interview', href: '#', count: '4', current: false },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false }
];
export default function Classes() {
  return (
    <Dashboard>
      {/* steps navigation */}
      <h3 className='px-20 py-10 font-bold'>NLW' s</h3>
      <div className='px-20'>
        <Step tabs={tabs}>classes</Step>
      </div>
      {/* aulas */}
      <div className='pl-20 pt-5 flex flex-col gap-y-5 mb-10'>
        <div className='flex fle-row items-center justify-between'>
          <div>
            <h2>Aula 1/6</h2>
            <iframe
              src='https://drive.google.com/file/d/1RrxnCQoUXBoH8bPvRsSlGpytmAin8Xzi/preview'
              width='720'
              height='480'
            ></iframe>
          </div>
          <div className='pr-20'>
            <h2>Aula 2/6</h2>
            <iframe
              src='https://drive.google.com/file/d/16p1jaIfK-IWRgZ8lf2EShbjroK6r2SSN/preview'
              width='720'
              height='480'
            ></iframe>
          </div>
        </div>
        {/* calsses 3 and 4 */}
        <div className='flex fle-row items-center justify-between'>
          <div>
            <h2>Aula 3/6</h2>
            <iframe
              src='https://drive.google.com/file/d/13sCqcA_Yy_GKoMMAyObHct64tP4Mnrj8/preview'
              width='720'
              height='480'
            ></iframe>
          </div>
          <div className='pr-20'>
            <h2>Aula 4/6</h2>
            <iframe
              src='https://drive.google.com/file/d/15wR5NsGU6Kgt_a5bcZJSItR5QpP8RSaA/preview'
              width='720'
              height='480'
            ></iframe>
          </div>
        </div>
        {/* classes 5 and 6 */}
        <div className='flex fle-row items-center justify-between'>
          <div>
            <h2>Aula 5/6</h2>
            <iframe
              src='https://drive.google.com/file/d/1GCxaQJ339pomAkZeyWj4F76x4Gl4liDi/preview'
              width='720'
              height='480'
            ></iframe>
          </div>
          <div className='pr-20'>
            <h2>Aula 6/6</h2>
            <iframe
              src='https://drive.google.com/file/d/1um41ovFIalfDnWSIt0PQKL9caUTq4uPA/preview'
              width='720'
              height='480'
            ></iframe>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
