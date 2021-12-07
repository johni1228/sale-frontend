import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import { Page } from 'components/Page'
import { Input } from 'components/Input'
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup'
import { CurrencyProps } from 'components/Currencies';

const schema = Yup.object().shape({
  address: Yup.string().required('Required'),
  whitelisted: Yup.boolean().required('Required'),
  preSaleRate: Yup.number().required('Required'),
  listingRate: Yup.number().required('Required'),
  softCap: Yup.number().required('Required'),
  hardCap: Yup.number().required('Required'),
  minBuy: Yup.number().required('Required'),
  maxBuy: Yup.number().required('Required'),
  liquidity: Yup.number().required('Required'),
  tokenType: Yup.string().required('Required'),
  startTime: Yup.number().required('Required'),
  endTime: Yup.number().required('Required'),
  isVesting: Yup.boolean().required('Required'),
  firstRelease: Yup.number().required('Required'),
  vestingCycle: Yup.string().required('Required'),
  releasePerCycle: Yup.number().required('Required'),
  isVestingTeamToken: Yup.boolean().required('Required'),
  totalTeamTokens: Yup.string().required('Required'),
})

const CreateSale = () => {
  const router = useHistory();
  const [isLoading, setLoading] = useState<boolean>(false)
  const [currency, setCurrency] = useState<CurrencyProps>(null);
  const form = useFormik({
    initialValues: {
      address: '',
      whitelisted: '',
      preSaleRate: '',
      listingRate: '',
      softCap: null,
      hardCap: null,
      minBuy: null,
      maxBuy: null,
      liquidity: null,
      tokenType: null,
      startTime: null,
      endTime: null,
      isVesting: false,
      firstRelease: null,
      vestingCycle: null,
      releasePerCycle: null,
      isVestingTeamToken: null,
      totalTeamTokens: null
    },
    validationSchema: schema,
    onSubmit: async values => {
      try {
        setLoading(true);
        router.push(`/createSale/${values.address}`);
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <Page color="transparent" className="min-h-screen">
      <form className="p-15 font-bold text-20 h-full"> 
        <div className="flex msm:flex-col md:flex-row md:items-end mb-20">
          <Input label="Contract Address" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Ex:0xf820..." className="md:w-500 msm:min-w-min"/>
          <div className="md:ml-20">
            <p className="">Name: {currency?.name}</p>
            <p className="">Symbol: {currency?.symbol}</p>
          </div>
        </div>
        <div className="grid 2xl:grid-cols-2 msm:grid-cols-1 min-h-full">
          <div className="2xl:border-r-2 2xl:border-gray-400 2xl:px-15 mb-20">
            <div className="flex mb-40">
              <label htmlFor="" className="mr-30">WhiteListed</label>
              <Input type="radio" name="whitelisted" value={form.values.whitelisted} className="mr-10"/>
              <label htmlFor="" className="mr-40">Yes</label>
              <Input type="radio" name="whitelisted" value={form.values.whitelisted} className="mr-10"/>
              <label htmlFor="">No</label>
            </div>
            <div className="flex justify-between items-center msm:flex-col lg:flex-row w-full">
              <Input label="Pre Sale Rate" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full lg:mr-20 mb-20"/>
              <Input label="Listing Rate" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full mb-20 "/>
            </div>
            <div className="flex justify-between items-center msm:flex-col lg:flex-row w-full">
              <Input label="SoftCap" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full lg:mr-20 mb-20"/>
              <Input label="HardCap" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full mb-20 "/>
            </div>
            <div className="flex justify-between items-center msm:flex-col lg:flex-row w-full">
              <Input label="Minimum Buy" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full lg:mr-20 mb-20"/>
              <Input label="Maximum Buy" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full mb-20 "/>
            </div>
            <div className="flex justify-between items-center msm:flex-col lg:flex-row w-full">
              <Input label="Liquidity %" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full lg:mr-20 mb-20"/>
              <div className="msm:w-full mb-20">
                <p>Token Type</p>
                <select name="pets" id="pet-select" className="border-2 border-gray-500 hover:border-red-200 focus:border-red-500 outline-none p-5 focus:shadow rounded-md w-full">
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center msm:flex-col lg:flex-row w-full">
              <Input label="Start Time" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full lg:mr-20 mb-20"/>
              <Input label="End Time" value={form.values.address} onChange={form.handleChange} type="text" placeholder="Enter rate..." className="msm:w-full mb-20 "/>
            </div>
          </div>
          <div className="2xl:px-15">
            <div className="flex justify-between items-center">
              <div className="flex">
                <Input type="checkbox" checked={form.values.isVesting} className="mr-20 mb-20" onChange={form.handleChange}/> 
                <label htmlFor="">Vesting Contributor?</label>
              </div>
            </div>
            <Input label="First Release For Pre Sale (%)" value={form.values.firstRelease} onChange={form.handleChange} className="mb-20"/>
            <div className="flex justify-between items-center msm:flex-col lg:flex-row w-full">
              <Input label="Vesting Cycle" value={form.values.vestingCycle} onChange={form.handleChange} type="text" placeholder="Enter..." className="msm:w-full lg:mr-20 mb-20"/>
              <Input label="Release per cycle(%)" value={form.values.releasePerCycle} onChange={form.handleChange} type="text" placeholder="Enter..." className="msm:w-full mb-20"/>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <Input type="checkbox" checked={form.values.isVestingTeamToken} className="mr-20 mb-20" onChange={form.handleChange}/> 
                <label htmlFor="">Vesting Team Tokens?</label>
              </div>
            </div>
            <Input label="Total Team Tokens" value={form.values.firstRelease} onChange={form.handleChange} className="mb-20"/>
          </div>
        </div>
      </form>
    </Page>
  )
}

export default CreateSale