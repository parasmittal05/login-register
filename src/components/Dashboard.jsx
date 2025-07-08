"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaCog, FaTimes, FaSignOutAlt, FaSearch, FaFilter, FaPlus, FaEdit, FaTrash } from "react-icons/fa"
import "../styles/Dashboard.css"

function Dashboard() {
  const [userData, setUserData] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [users] = useState([
    {
      id: 1,
      name: "Michael Holz",
      avatar: "https://i.pravatar.cc/150?img=1",
      dateCreated: "04/01/2023",
      role: "Admin",
      status: "Active",
      email: "michael@example.com",
      lastActive: "2 minutes ago"
    },
    {
      id: 2,
      name: "Paula Wilson",
      avatar: "https://i.pravatar.cc/150?img=2",
      dateCreated: "05/08/2024",
      role: "Publisher",
      status: "Active",
      email: "paula@example.com",
      lastActive: "5 minutes ago"
    },
    {
      id: 3,
      name: "Antonio Moreno",
      avatar: "https://i.pravatar.cc/150?img=3",
      dateCreated: "11/05/2024",
      role: "Publisher",
      status: "Suspended",
      email: "antonio@example.com",
      lastActive: "1 hour ago"
    },
    {
      id: 4,
      name: "Mary Saveley",
      avatar: "https://i.pravatar.cc/150?img=4",
      dateCreated: "06/09/2024",
      role: "Reviewer",
      status: "Active",
      email: "mary@example.com",
      lastActive: "Just now"
    },
    {
      id: 5,
      name: "Martin Sommer",
      avatar: "https://i.pravatar.cc/150?img=5",
      dateCreated: "12/08/2023",
      role: "Moderator",
      status: "Inactive",
      email: "martin@example.com",
      lastActive: "2 days ago"
    },
  ])

  const navigate = useNavigate()

  useEffect(() => {
    // Get user data from localStorage
    const user = localStorage.getItem("user")
    if (user) {
      setUserData(JSON.parse(user))
    }
  }, [])

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    // Redirect to login
    navigate("/login")
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "#4CAF50"
      case "Suspended":
        return "#F44336"
      case "Inactive":
        return "#FF9800"
      default:
        return "#9E9E9E"
    }
  }

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>User Management Dashboard</h1>
          <p className="welcome-text">Welcome back, {userData?.name || "User"}!</p>
        </div>
        <div className="user-info">
          <div className="user-profile">
            <img 
              src={userData?.avatar || "https://i.pravatar.cc/150?img=12"} 
              alt={userData?.name} 
              className="user-avatar"
            />
            <span>{userData?.name || "User"}</span>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p>{users.filter(user => user.status === "Active").length}</p>
          </div>
          <div className="stat-card">
            <h3>Suspended Users</h3>
            <p>{users.filter(user => user.status === "Suspended").length}</p>
          </div>
          <div className="stat-card">
            <h3>Inactive Users</h3>
            <p>{users.filter(user => user.status === "Inactive").length}</p>
          </div>
        </div>

        <div className="table-container">
          <div className="table-header">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="table-actions">
              <button className="action-button filter">
                <FaFilter /> Filter
              </button>
              <button className="action-button add">
                <FaPlus /> Add User
              </button>
            </div>
          </div>

          <table className="users-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Date Created</th>
                <th>Last Active</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="user-cell">
                    <img src={user.avatar} alt={user.name} className="user-avatar" />
                    <div className="user-info">
                      <span className="user-name">{user.name}</span>
                      <span className="user-email">{user.email}</span>
                    </div>
                  </td>
                  <td>
                    <span className="role-badge">{user.role}</span>
                  </td>
                  <td>
                    <span className="status-badge" style={{ backgroundColor: getStatusColor(user.status) }}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.dateCreated}</td>
                  <td>{user.lastActive}</td>
                  <td className="action-cell">
                    <button className="action-button edit" title="Edit User">
                      <FaEdit />
                    </button>
                    <button className="action-button delete" title="Delete User">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button className="pagination-button">Previous</button>
            <button className="pagination-button active">1</button>
            <button className="pagination-button">2</button>
            <button className="pagination-button">3</button>
            <button className="pagination-button">4</button>
            <button className="pagination-button">5</button>
            <button className="pagination-button">Next</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

