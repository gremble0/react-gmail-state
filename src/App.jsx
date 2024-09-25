import { useState } from 'react'
import Header from './components/Header'
import initialEmails from './data/emails'

import './styles/App.css'

export default function App() {
  const [emails, setEmails] = useState(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{
        emails.map((email) => (
          <ul className={`email ${email.read ? 'read' : 'unread'}`} key={email.id}>
            <input
              className="read"
              type="checkbox"
              checked={email.read}
              onChange={() => { email.read = !email.read; setEmails([...emails]) }}
            ></input>
            <input
              className="star-checkbox"
              type="checkbox"
              checked={email.starred}
              onChange={() => { email.starred = !email.starred; setEmails([...emails]) }}
            ></input>
            <span className="sender">{email.sender}</span>
            <span className="title">{email.title}</span>
          </ul>
        ))
      }</main>
    </div>
  )
}
