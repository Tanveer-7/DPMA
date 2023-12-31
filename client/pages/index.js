import WrongNetworkMessage from '../components/WrongNetworkMessage'
import ConnectWalletButton from '../components/ConnectWalletButton'
import TodoList from '../components/TodoList'
import { TaskContractAddress } from '../config.js'
import TaskAbi from '../../build/contracts/TaskContract.json'
import {ethers} from 'ethers'
import { useState } from 'react'

/* 
const tasks = [
  { id: 0, taskText: 'clean', isDeleted: false }, 
  { id: 1, taskText: 'food', isDeleted: false }, 
  { id: 2, taskText: 'water', isDeleted: true }
]
*/

export default function Home() {
  const [correctNetwork, setCorrectNetwork] = useState(false)
  const [isUserLoggedIn, SetIsUserLoggedIn] = useState(false)
  const [currentAccount, SetCurrentAccount] = useState('')

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try{
      const {ethereum} = window
      if (!ethereum){
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({method:'eth_childId'})
      console.log('connected to chain:', chainId)


      const rinkebyChainId = '0x4'
      if (chainId !== rinkebyChainId){
        alert('you are not connect to the rinkeby testnet!')
        setCorrectNetwork(false)
        return
      }else{
        setCorrectNetwork(true)
      }

      const accounts = await ethereum.request({method:'eth_requestAccounts'})

      console.log('Found account', accounts[0])
      SetIsUserLoggedIn(true)
      SetCurrentAccount(accounts[0])
       

    }catch (error){
      console.log(error)
    }

  }

  // Just gets all the tasks from the contract
  const getAllTasks = async () => {

  }

  // Add tasks from front-end onto the blockchain
  const addTask = async e => {

  }

  // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
  const deleteTask = key => async () => {

  }

  return (
    <div className='bg-[#97b5fe] h-screen w-screen flex justify-center py-6'>
      {'is user not logged in?' ? <ConnectWalletButton connectWallet={connectWallet}/> :
        'is this the correct network?' ? <TodoList /> : <WrongNetworkMessage />}
    </div>
  )
}

