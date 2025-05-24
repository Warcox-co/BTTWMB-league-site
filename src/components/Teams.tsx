import { useState } from 'react';
import { Modal, Box } from '@mui/material';
import styles from './Teams.module.css';
import ownersData from '../../ownersData.json';

interface TeamData {
  teamName: string;
  profilePicture: string;
}

type OwnersDataType = {
  [key: string]: TeamData;
};

const typedOwnersData = ownersData as OwnersDataType;

function Teams() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (teamId: string) => {
    setSelectedTeam(teamId);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTeam(null);
  };

  return (
    <div className={styles.teamsPage}>
      <header className={styles.header}>
        <h1>Teams</h1>
      </header>
      <div className={styles.teamsGrid}>
        {Object.entries(typedOwnersData).map(([teamId, team]) => (
          <button
            key={teamId}
            className={styles.teamButton}
            onClick={() => handleOpenModal(teamId)}
          >
            <img
              src={team.profilePicture}
              alt={`${team.teamName}'s profile`}
              className={styles.teamImage}
            />
            <span className={styles.teamName}>{team.teamName}</span>
          </button>
        ))}
      </div>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="team-modal"
      >
        <Box className={styles.modalContent}>
          {selectedTeam && typedOwnersData[selectedTeam] && (
            <>
              <h2>{typedOwnersData[selectedTeam].teamName}</h2>
              <img
                src={typedOwnersData[selectedTeam].profilePicture}
                alt={`${typedOwnersData[selectedTeam].teamName}'s profile`}
                style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              />
              {/* Add more team details here as needed */}
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Teams;
