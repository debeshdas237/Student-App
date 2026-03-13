import { useNavigate } from 'react-router-dom';
import './Home.scss';

export default function Home(){
    const navigate = useNavigate();
    return (
        <>
            <div className='section homepage'>
                <h1>Welcome to our students page!</h1>
                <div>
                    <h3>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </h3>
                    <div className='btn-group'>
                        <button className="btn btn-primary" onClick={() => navigate("add-student")}>Add new</button>
                        <button className="btn btn-success" onClick={() => navigate("students")}>View students</button>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}