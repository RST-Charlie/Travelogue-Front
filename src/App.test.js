import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import App from './App';

describe('<App />', () => {
  
    beforeEach(() => {
        
        jest.spyOn(window, 'fetch').mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse),
        })
        );
        
        act(() => {
            render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            );
        });
    });
    
    afterEach(() => {
        jest.restoreAllMocks();
    });
    
    it('decrypts and parses userId', async () => {
        const mockCurrentUser = jest.fn()
        const mockLoggedInUser = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        const [currentUser, setCurrentUser] = useState(null);

        if (mockLoggedInUser) {
            const authUserId = +JSON.parse(atob(mockLoggedInUser?.split(".")[1])).sub;
            setCurrentUser({ id: authUserId });
        }

        expect(mockCurrentUser).toHaveBeenCalledTimes(1);
        expect(mockCurrentUser).toHaveBeenCalledWith({ id : 1 })
    });

    it('Fetches trips', async () => {
        expect(window.fetch).toHaveBeenCalledWith('https://travelogue-d6r2.onrender.com/trips')
    });
    
    it('Creates a new trip', async () => {
        const createdTrip = {"body": {"city": "", "country": "wow", "end_date": "", "entry": "wow", "international": false, "photo": "", "region": "wow", "start_date": "", "state": "", "title": "wow", "user_id": "1"}}
    
        expect(window.fetch).toHaveBeenCalledWith('https://travelogue-d6r2.onrender.com/trips'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer <YOUR_TOKEN>',

            },
            body: JSON.stringify(createdTrip)
        }
    });

            
    it('Updates an existing trip', async () => {
        const trip = {"body": {"city": "", "country": "wow", "end_date": "", "entry": "wow", "international": false, "photo": "", "region": "wow", "start_date": "", "state": "", "title": "wow", "user_id": "1"}}
        
        {
            fetch(`https://travelogue-d6r2.onrender.com/trips`, {
                body: JSON.stringify(trip),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
                })        
        }

        const updatedTrip = {"body": {"city": "wow", "country": "wow", "end_date": "", "entry": "wow", "international": false, "photo": "", "region": "wow", "start_date": "", "state": "wow", "title": "wow", "user_id": "1"}}

        fetch(`https://travelogue-d6r2.onrender.com/trips/1`, {
            body: JSON.stringify(updatedTrip),
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH"
        })

    
        expect(window.fetch).toHaveBeenLastCalledWith(`https://travelogue-d6r2.onrender.com/trips/1`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer <YOUR_TOKEN>',
            },
            body: JSON.stringify(updatedTrip),
        });
        // expect(await screen.findByText('Trip updated successfully')).toBeInTheDocument(); // Replace with a success message you expect after updating a trip
    });
        
          it('Deletes a trip', async () => {
            // Arrange
            const tripId = 123; // Replace with the ID of the trip to be deleted
        
            // Act
            // Invoke the deleteTrip function passing the tripId
            // For example: deleteTrip(tripId);
        
            // Assert
            expect(window.fetch).toHaveBeenCalledWith(`https://travelogue-d6r2.onrender.com/trips/${tripId}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer <YOUR_TOKEN>',
              },
            });
            expect(await screen.findByText('Trip deleted successfully')).toBeInTheDocument(); // Replace with a success message you expect after deleting a trip
          });});
  