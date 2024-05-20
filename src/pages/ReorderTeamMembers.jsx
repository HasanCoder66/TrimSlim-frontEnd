import React from 'react'
import ServicesHeader from '../components/ServicesHeader'
import ReorderTeamMembersTable from '../components/ReorderTeamMembersTable'

const ReorderTeamMembers = () => {
  return (
    <div>
        <ServicesHeader heading= 'Reorder Team Members'/>
        <ReorderTeamMembersTable/>
    </div>
  )
}

export default ReorderTeamMembers