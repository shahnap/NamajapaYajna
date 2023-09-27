// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';

// function RegistrationPage() {
//   const history = useHistory();
//   const [uuid, setUuid] = useState('');
//   const [registrationStatus, setRegistrationStatus] = useState('');

//   const handleRegistration = async () => {
//     // Generate a UUID for registration
//     const generatedUuid = uuidv4();
//     try {
//       // Send the UUID to the server for registration
//       const response = await axios.post('http://localhost:5000/api/register', {
//         uuid: generatedUuid,
//       });

//       // Handle the registration response
//       if (response.status === 200) {
//         setUuid(generatedUuid);
//         setRegistrationStatus('Registration Successful');

//         // Redirect the user back to the main page with the UUID
//         history.push(`/main?uuid=${generatedUuid}`);
//       } else {
//         setRegistrationStatus('Registration Failed');
//       }
//     } catch (error) {
//       console.error('Registration failed:', error);
//       setRegistrationStatus('Registration Failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Registration Page</h2>
//       <button onClick={handleRegistration}>Register</button>
//       <p>Status: {registrationStatus}</p>
//     </div>
//   );
// }

// export default RegistrationPage;
