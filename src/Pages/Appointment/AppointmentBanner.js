import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ( { date, setDate } ) => {

    return (
        <section style={{ background: `url(${ bg })`, backgroundSize: 'cover' }}>
            <div className="hero py-6 lg:py-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" alt='banner' />
                    <div className='mt-10 lg:mt-0'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;