import { NavLink } from 'react-router-dom';
import '../styles/components/_navbar.scss';

const navbar = () => {
  return (
    <div className="navbar">
      <ul className="items">
        <NavLink to="/profile">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M4.46509 5.30233C4.46509 2.37394 6.83902 0 9.76741 0C12.6959 0 15.0697 2.37394 15.0697 5.30233C15.0697 8.23072 12.6959 10.6047 9.76741 10.6047C6.83902 10.6047 4.46509 8.23072 4.46509 5.30233Z"
                fill="white"
              />
              <path
                d="M6.36279 13.3953C2.84872 13.3953 0 16.2441 0 19.7581C0 22.1009 1.89915 24 4.24186 24H15.293C17.6358 24 19.5349 22.1009 19.5349 19.7581C19.5349 16.2441 16.6861 13.3953 13.1721 13.3953H6.36279Z"
                fill="white"
              />
            </svg>
          </li>
        </NavLink>
        <NavLink to="/cart">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.12233 0.267126C8.19118 1.66339e-08 9.46078 0 12 0C14.5392 0 15.8088 1.66339e-08 16.8777 0.267126C19.4665 0.914121 21.5676 2.67366 22.5323 5.00228C22.9304 5.9637 23.0646 7.13922 23.3329 9.49025L23.6163 11.974C23.9719 15.0905 24.1497 16.6487 23.8424 17.9123C23.1984 20.5595 21.125 22.706 18.3658 23.582C17.0488 24 15.3659 24 12 24C8.63409 24 6.95114 24 5.63421 23.582C2.87499 22.706 0.801654 20.5595 0.157663 17.9123C-0.149694 16.6487 0.0281118 15.0905 0.383736 11.974L0.667176 9.49025C0.935449 7.13922 1.06959 5.9637 1.46781 5.00228C2.43231 2.67366 4.53347 0.914121 7.12233 0.267126ZM9.30273 8.6512C9.30273 10.0384 10.5105 11.1628 12.0002 11.1628C13.4901 11.1628 14.6977 10.0384 14.6977 8.6512V6.41864C14.6977 5.95625 15.1003 5.58143 15.5968 5.58143C16.0934 5.58143 16.496 5.95625 16.496 6.41864V8.6512C16.496 10.9631 14.4832 12.8372 12.0002 12.8372C9.51725 12.8372 7.50441 10.9631 7.50441 8.6512V6.41864C7.50441 5.95625 7.90698 5.58143 8.40357 5.58143C8.90016 5.58143 9.30273 5.95625 9.30273 6.41864V8.6512Z"
                fill="white"
              />
            </svg>
          </li>
        </NavLink>
        <NavLink to="/">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentcolor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.533.861a5.75 5.75 0 00-3.066 0c-.606.168-1.154.464-1.759.88-.592.406-1.279.955-2.151 1.653l-.023.018-2 1.6-.09.072c-1.017.813-1.643 1.314-2.1 1.944a5.75 5.75 0 00-.888 1.848c-.206.75-.206 1.552-.206 2.854V17A5.75 5.75 0 007 22.75 2.75 2.75 0 009.75 20v-4a2.25 2.25 0 014.5 0v4A2.75 2.75 0 0017 22.75 5.75 5.75 0 0022.75 17V11.73c0-1.302 0-2.103-.206-2.854a5.75 5.75 0 00-.889-1.848c-.457-.63-1.082-1.13-2.099-1.944l-.09-.072-2-1.6-.023-.018c-.872-.698-1.559-1.247-2.151-1.654-.605-.415-1.153-.711-1.759-.879z"
              />
            </svg>
          </li>
        </NavLink>
        <NavLink to="/categories">
          <li>
            {' '}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentcolor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 5.2093C0 3.38588 0 2.47416 0.354858 1.7777C0.667012 1.16509 1.16509 0.667012 1.7777 0.354858C2.47416 0 3.38588 0 5.2093 0H7.16279C8.98622 0 9.89793 0 10.5944 0.354858C11.207 0.667012 11.705 1.16509 12.0172 1.7777C12.3721 2.47416 12.3721 3.38588 12.3721 5.2093V7.16279C12.3721 8.98622 12.3721 9.89793 12.0172 10.5944C11.705 11.207 11.207 11.705 10.5944 12.0172C9.89793 12.3721 8.98622 12.3721 7.16279 12.3721H5.2093C3.38588 12.3721 2.47416 12.3721 1.7777 12.0172C1.16509 11.705 0.667012 11.207 0.354858 10.5944C0 9.89793 0 8.98622 0 7.16279V5.2093ZM28 5.2093C28 3.38588 28 2.47416 27.6451 1.7777C27.333 1.16509 26.8349 0.667012 26.2223 0.354858C25.5258 0 24.6141 0 22.7907 0H20.8372C19.0138 0 18.1021 0 17.4056 0.354858C16.793 0.667012 16.295 1.16509 15.9828 1.7777C15.6279 2.47416 15.6279 3.38588 15.6279 5.2093V7.16279C15.6279 8.98622 15.6279 9.89793 15.9828 10.5944C16.295 11.207 16.793 11.705 17.4056 12.0172C18.1021 12.3721 19.0138 12.3721 20.8372 12.3721H22.7907C24.6141 12.3721 25.5258 12.3721 26.2223 12.0172C26.8349 11.705 27.333 11.207 27.6451 10.5944C28 9.89793 28 8.98622 28 7.16279V5.2093ZM0 20.8372C0 19.0138 0 18.1021 0.354858 17.4056C0.667012 16.793 1.16509 16.295 1.7777 15.9828C2.47416 15.6279 3.38588 15.6279 5.2093 15.6279H7.16279C8.98622 15.6279 9.89793 15.6279 10.5944 15.9828C11.207 16.295 11.705 16.793 12.0172 17.4056C12.3721 18.1021 12.3721 19.0138 12.3721 20.8372V22.7907C12.3721 24.6141 12.3721 25.5258 12.0172 26.2223C11.705 26.8349 11.207 27.333 10.5944 27.6451C9.89793 28 8.98622 28 7.16279 28H5.2093C3.38588 28 2.47416 28 1.7777 27.6451C1.16509 27.333 0.667012 26.8349 0.354858 26.2223C0 25.5258 0 24.6141 0 22.7907V20.8372ZM28 20.8372C28 19.0138 28 18.1021 27.6451 17.4056C27.333 16.793 26.8349 16.295 26.2223 15.9828C25.5258 15.6279 24.6141 15.6279 22.7907 15.6279H20.8372C19.0138 15.6279 18.1021 15.6279 17.4056 15.9828C16.793 16.295 16.295 16.793 15.9828 17.4056C15.6279 18.1021 15.6279 19.0138 15.6279 20.8372V22.7907C15.6279 24.6141 15.6279 25.5258 15.9828 26.2223C16.295 26.8349 16.793 27.333 17.4056 27.6451C18.1021 28 19.0138 28 20.8372 28H22.7907C24.6141 28 25.5258 28 26.2223 27.6451C26.8349 27.333 27.333 26.8349 27.6451 26.2223C28 25.5258 28 24.6141 28 22.7907V20.8372Z"
              />
            </svg>
          </li>
        </NavLink>
        <NavLink to="/blog">
          <li>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentcolor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 0H13.9505C11.5581 0 9.69581 -3.88123e-08 8.20726 0.135442C6.69656 0.272186 5.47498 0.554791 4.39535 1.1773C3.05926 1.94909 1.94985 3.05895 1.1786 4.39535C0.553488 5.47628 0.272186 6.69656 0.135442 8.20726C-3.88123e-08 9.69581 0 11.5581 0 13.9505V14.0495C0 16.4419 -3.88123e-08 18.3042 0.135442 19.7927C0.272186 21.3034 0.554791 22.525 1.1773 23.6047C1.94909 24.9407 3.05895 26.0502 4.39535 26.8214C5.47628 27.4465 6.69656 27.7278 8.20726 27.8659C9.69581 28 11.5581 28 13.9505 28H18.2326V24.3509C18.2326 23.1801 18.2326 22.2047 18.3367 21.4311C18.4461 20.6132 18.6884 19.8748 19.2809 19.2822C19.8748 18.6884 20.6132 18.4461 21.4298 18.3367C22.2047 18.2326 23.1814 18.2326 24.3509 18.2326H28V13.9505C28 11.5581 28 9.69581 27.8646 8.20726C27.7278 6.69656 27.4452 5.47498 26.8227 4.39535C26.0509 3.05926 24.9411 1.94985 23.6047 1.1786C22.5237 0.553488 21.3034 0.272186 19.7927 0.135442C18.3042 -3.88123e-08 16.4419 0 14.0495 0H14ZM24.4473 25.7535C23.2463 26.8306 21.7721 27.5564 20.186 27.8515V24.4186C20.186 23.1632 20.1887 22.3193 20.2733 21.6902C20.354 21.0899 20.4934 20.832 20.664 20.6627C20.8333 20.4934 21.0899 20.354 21.6902 20.272C22.3193 20.1887 23.1632 20.186 24.4186 20.186H27.8515C27.5564 21.7721 26.8306 23.2463 25.7535 24.4473C25.5933 24.6244 25.4214 24.7976 25.131 25.088L25.1088 25.1088L25.088 25.131C24.7976 25.4214 24.6244 25.5933 24.4473 25.7535ZM8.7907 7.81395C8.53165 7.81395 8.28321 7.91686 8.10004 8.10004C7.91686 8.28321 7.81395 8.53165 7.81395 8.7907C7.81395 9.04975 7.91686 9.29818 8.10004 9.48136C8.28321 9.66453 8.53165 9.76744 8.7907 9.76744H19.2093C19.4684 9.76744 19.7168 9.66453 19.9 9.48136C20.0831 9.29818 20.186 9.04975 20.186 8.7907C20.186 8.53165 20.0831 8.28321 19.9 8.10004C19.7168 7.91686 19.4684 7.81395 19.2093 7.81395H8.7907ZM7.81395 14C7.81395 13.741 7.91686 13.4925 8.10004 13.3093C8.28321 13.1262 8.53165 13.0233 8.7907 13.0233H16.6047C16.8637 13.0233 17.1121 13.1262 17.2953 13.3093C17.4785 13.4925 17.5814 13.741 17.5814 14C17.5814 14.259 17.4785 14.5075 17.2953 14.6907C17.1121 14.8738 16.8637 14.9767 16.6047 14.9767H8.7907C8.53165 14.9767 8.28321 14.8738 8.10004 14.6907C7.91686 14.5075 7.81395 14.259 7.81395 14ZM8.7907 18.2326C8.53165 18.2326 8.28321 18.3355 8.10004 18.5186C7.91686 18.7018 7.81395 18.9503 7.81395 19.2093C7.81395 19.4684 7.91686 19.7168 8.10004 19.9C8.28321 20.0831 8.53165 20.186 8.7907 20.186H11.3953C11.6544 20.186 11.9028 20.0831 12.086 19.9C12.2692 19.7168 12.3721 19.4684 12.3721 19.2093C12.3721 18.9503 12.2692 18.7018 12.086 18.5186C11.9028 18.3355 11.6544 18.2326 11.3953 18.2326H8.7907Z"
              />
            </svg>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default navbar;
