import React from 'react'
import ServicesHeader from '../components/ServicesHeader'
import TeamMembersListTable from '../components/TeamMembersListTable'

const TeamMembersList = () => {
  return (
   <>
    <ServicesHeader heading="Team Members List"/>
    <TeamMembersListTable/>
    </>
  )
}

export default TeamMembersList