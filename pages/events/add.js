import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';

export default function AddEventPage() {
  const [values, setValues] = useState({
    name: '',
    performers: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error('Something Went Wrong');
    } else {
      const evt = await res.json();
      router.push(`/events/${evt.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="Add New Event">
      <Link href="/events">Go Back</Link>
      <h1>Add Event</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="performers">Performers</label>
            <input
              type="text"
              name="performers"
              id="performers"
              value={values.performers}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="venue">Venue</label>
            <input
              type="text"
              name="venue"
              id="venue"
              value={values.venue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              value={values.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="time">Time</label>
            <input
              type="text"
              name="time"
              id="time"
              value={values.time}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description">Event Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type="submit" value="Add Event" className="btn" />
      </form>
    </Layout>
  );
}
//  ☝☝Brad's from Github repo

// 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥

//  👇👇Mine from first time through

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import Layout from '@/components/Layout';
// import { API_URL } from '@/config/index';
// import styles from '@/styles/Form.module.css';

// export default function AddEventPage() {
//   const [values, setValues] = useState({
//     name: '',
//     performers: '',
//     venue: '',
//     address: '',
//     date: '',
//     time: '',
//     description: '',
//   });

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.table(values);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...values, [name]: value });

//     // Validation
//     const hasEmptyFields = Object.values(values).some(
//       (element) => element === ''
//     );

//     if (hasEmptyFields) {
//       toast.error('please fill in all fields, yo');
//     }

//     const res = await fetch(`${API_URL}/events`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(values),
//     });

//     if (!res.ok) {
//       toast.error('Something went wrong');
//     } else {
//       const evt =  await res.json();
//       router.push(`/events/${evt.slug}`);
//     }
//   };

//   return (
//     <Layout title="Add New Event">
//       <Link href="/events">Go Back</Link>
//       <h1>Adding events happens on this page</h1>
//       <ToastContainer />

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.grid}>
//           <div>
//             <label htmlFor="name">Event Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={values.name}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="performers">Performers</label>
//             <input
//               type="text"
//               id="performers"
//               name="performers"
//               value={values.performers}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="venue">Venue</label>
//             <input
//               type="text"
//               id="venue"
//               name="venue"
//               value={values.venue}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="address">Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={values.address}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="date">Date</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={values.date}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div>
//             <label htmlFor="time">Time</label>
//             <input
//               type="text"
//               id="time"
//               name="time"
//               value={values.time}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="description">Event Description</label>
//           <textarea
//             type="text"
//             name="description"
//             id="description"
//             value={values.description}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>
//         <input type="submit" value="Add Event" className="btn" />
//       </form>
//     </Layout>
//   );
// }

// //
// //  ☝☝Mine from first time through

// // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥

// //  👇👇Mine from second time through
