
import './Index.css';
import ToDoList from './Index_TodoList/ToDoList';
import Weather from './weather/Weather';

const Index = () => {
    return (
        <div id="index">
            <ToDoList />
            <Weather />
        </div>
    )
}

export default Index;