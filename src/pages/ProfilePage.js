import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [classroomName, setClassroomName] = useState('');
    const [description, setDescription] = useState('');
    const [classroomsCreatedByMe, setClassroomsCreatedByMe] = useState([]);
    const [classroomsJoinedByMe, setClassroomsJoinedByMe] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://shiksha-sangam-backend.onrender.com/auth/getuser`, {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await response.json();
                console.log(data)
                if (response.ok) {
                    setUser(data.data);
                } else {
                    toast.error(data.message || 'Failed to fetch user data');
                }

            }
            catch (error) {
                toast.error('An error occurred while fetching user data');
            } finally {
                setLoading(false);
            }
        }
        fetchUser();

    }, [])


    const fetchClassrooms = async () => {
        try {
            const response = await fetch(`https://shiksha-sangam-backend.onrender.com/class/classroomscreatedbyme`, {
                method: 'GET',
                credentials: 'include',
            });

            const data = await response.json();

            if (response.ok) {
                setClassroomsCreatedByMe(data.data);
            } else {
                toast.error(data.message || 'Failed to fetch classrooms');
            }
        } catch (error) {
            toast.error('An error occurred while fetching classrooms');
        }
    }
    const fetchClassroomsJoinedByMe = async () => {
        try {
            const response = await fetch(`https://shiksha-sangam-backend.onrender.com/class/classroomsforstudent`, {
                method: 'GET',
                credentials: 'include',
            });

            const data = await response.json();
            console.log(data)
            if (response.ok) {
                setClassroomsJoinedByMe(data.data);
            }
        }
        catch (error) {
            toast.error('An error occurred while fetching joined classrooms');
        }
    }


    useEffect(() => {
        if (user) {
            fetchClassrooms();
            fetchClassroomsJoinedByMe()
        }
    }, [user]);


    const handleCreateClassroom = async () => {
        try {
            const response = await fetch(`https://shiksha-sangam-backend.onrender.com/class/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: classroomName,
                    description,
                }),
                credentials: 'include',
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Classroom created successfully');
                setClassroomName('');
                setDescription('');
                setShowPopup(false);
                fetchClassrooms();
            } else {
                toast.error(data.message || 'Failed to create classroom');
            }
        }
        catch (error) {
            toast.error('An error occurred while creating classroom');
        }
    }

    const navigate = useNavigate();

    const handleRowClick = (classroomId) => {
        navigate(`/classes/${classroomId}`);  // Navigate to the class details page
    };
    return (
        <div className="profile-page">
            {loading ? (
                <div className="loading">Loading...</div>
            )
                : user ? (
                    <>
                        <h1>Profile</h1>
                        <div className="profile-info">
                            <img
                                src={
                                    'https://img.utdstc.com/icon/840/346/84034618660d96a3b1fe1ec19bed64f45bf926f3c1c9edfdf8ee40da225dd01f:200'
                                    || 'default-profile.png'
                                }
                                alt="Profile"
                                className="profile-picture"
                            />
                            <div className="profile-details">
                                <h2>{user.name}</h2>
                                <p>Email: {user.email}</p>
                                <p>Role: {user.role}</p>
                                {user.role === 'teacher' && (
                                    <button className="create-classroom-btn" onClick={() => setShowPopup(true)}>
                                        Create Classroom
                                    </button>
                                )}
                            </div>
                        </div>

                        {showPopup && (
                            <div className="popup-overlay">
                                <div className="popup-content">
                                    <h3>Create Classroom</h3>
                                    <input
                                        type="text"
                                        placeholder="Classroom Name"
                                        value={classroomName}
                                        onChange={(e) => setClassroomName(e.target.value)}
                                    />
                                    <textarea
                                        placeholder="Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                    <div className="popup-buttons">
                                        <button onClick={handleCreateClassroom}>Submit</button>
                                        <button onClick={() => setShowPopup(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}


                        {
                            user.role == 'teacher' &&
                            <div className="classroom-list">
                                <h3>Classrooms created by me</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classroomsCreatedByMe.map(classroom => (
                                            <tr key={classroom._id} onClick={() => handleRowClick(classroom._id)}>
                                                <td>{classroom.name}</td>
                                                <td>{classroom.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>


                        }
                        
                        <div className="classroom-list">
                            <h3>Classrooms joined by me</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classroomsJoinedByMe.map(classroom => (
                                        <tr key={classroom._id} onClick={() => handleRowClick(classroom._id)} className="clickable-row">
                                            <td>{classroom.name}</td>
                                            <td>{classroom.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                    </>
                )
                    : (
                        <p>No user data found.</p>
                    )
            }
        </div>
    )
}

export default ProfilePage
