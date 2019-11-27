import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

export default function UserPage(props) {
  const initialUserState = {
    user: {},
    loading: true,
  }

  const [user, setUser] = useState(initialUserState)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)

      setUser(data)
    }

    getUser()
  }, [])

  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>Привет по брацки</h1>

      <table>
        <thead>
          <tr>
            <th>Наименование книги</th>
            <th>Автор</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
		
          <tr>
            <td>Этюд в багровых тонах</td>
			<td><a href={'kdoil.html'}> Артур Конан Дойл </a></td>
            <td>1887</td>
		  </tr>
		  
		  <tr>
            <td>Над пропастью во ржи</td>
			<td><a href={'sell.html'}> Джером Дэвид Сэлинджер </a></td>
            <td>1951</td>
		  </tr>
		  
		  <tr>
            <td>Алхимик</td>
			<td><a href={'alc.html'}> Пауло Коэльо </a></td>
            <td>1988</td>
		  </tr>


        </tbody>
      </table>
    </div>
  )
}
