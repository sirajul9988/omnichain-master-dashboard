import { useContractWrite, usePrepareContractWrite } from 'wagmi';

/**
 * @dev Custom hook to interact with the Repo 81 (Freelance Escrow).
 */
export function useReleaseMilestone(jobId, amount) {
  const { config } = usePrepareContractWrite({
    address: '0x_ESCROW_CONTRACT_ADDRESS',
    abi: ['function releaseMilestone(uint256 _jobId, uint256 _amount) external'],
    functionName: 'releaseMilestone',
    args: [jobId, amount],
  });

  return useContractWrite(config);
}
