import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector(state => state.auth)

    return isAuthenticated ? children : null

}

export default ProtectedRoute