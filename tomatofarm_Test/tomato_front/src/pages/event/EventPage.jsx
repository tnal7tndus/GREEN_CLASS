import "./EventPage.css";
import EventPageTop from './eventPageTop/EventPageTop';
import EventDetail from './eventDetail/EventDetail';
import EventList from './eventList/EventList';
import EventItemList from './eventItemList/EventItemList';
import SecondContainer from './../home/index/secondContainer/SecondContainer';


const EventPage = () => {

    return (
        <>
            <div id="containerYH">
                <EventPageTop />
                <EventDetail />
                <EventList />
                <EventItemList />
                <SecondContainer />
            </div>
        </>
    );
}

export default EventPage;