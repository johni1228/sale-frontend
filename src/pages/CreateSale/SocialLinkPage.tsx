import React, {useState} from 'react'
import { useHistory } from "react-router-dom"
import { Page } from 'components/Page'
import { Input } from 'components/Input'
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup'
import { CurrencyProps } from 'components/Currencies';

const schema = Yup.object().shape({
  Logo: Yup.string().required('Required'),
  Telegram: Yup.string().required('Required'),
  Github: Yup.string().required('Required'),
  Discord: Yup.string().required('Required'),
  Website: Yup.string().required('Required'),
  Twitter: Yup.string().required('Required'),
  Medium: Yup.string().required('Required'),
  Whitepapper: Yup.string().required('Required'),
  Description: Yup.string().required('Required'),
})

export const SocialLink = () => {
  const router = useHistory();
  const [isLoading, setLoading] = useState<boolean>(false)
  const [currency, setCurrency] = useState<CurrencyProps>(null);
  const handleNext = () => {
    return router.push('/launchpad/createSale/sociallink')
  }
  const handleBack = () => {
    return router.goBack()
  }
  const form = useFormik({
    initialValues: {
      logo: '',
      telegram: '',
      discord: '',
      website: '',
      github: '',
      medium: '',
      twitter: '',
      whitepapper: '',
      description: ''
    },
    validationSchema: schema,
    onSubmit: async values => {
      try {
        setLoading(true);
        // router.push(`/createSale/${values.address}`);
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
        <div className="grid 2xl:grid-cols-2 msm:grid-cols-1 min-h-full">
          <div className="2xl:px-15 mb-20">
            <Input label="Logo" value={form.values.logo} onChange={form.handleChange} type="text" placeholder="Logo url..." className="msm:w-full lg:mr-20 mb-20"/>
            <Input label="Telgram" value={form.values.telegram} onChange={form.handleChange} type="text" placeholder="Telgram url..." className="msm:w-full mb-20 "/>
            <Input label="Github" value={form.values.github} onChange={form.handleChange} type="text" placeholder="Github url..." className="msm:w-full lg:mr-20 mb-20"/>
            <Input label="Discord" value={form.values.discord} onChange={form.handleChange} type="text" placeholder="Discord url..." className="msm:w-full mb-20 "/>
          </div>
          <div className="2xl:px-15">
            <Input label="Website" value={form.values.website} onChange={form.handleChange} type="text" placeholder="Webiste url" className="msm:w-full lg:mr-20 mb-20"/>
            <Input label="Twitter" value={form.values.twitter} onChange={form.handleChange} type="text" placeholder="Twitter url..." className="msm:w-full lg:mr-20 mb-20"/>
            <Input label="Medium" value={form.values.medium} onChange={form.handleChange} type="text" placeholder="Medium url..." className="msm:w-full lg:mr-20 mb-20"/>
            <Input label="Whitepapper" value={form.values.whitepapper} onChange={form.handleChange} type="text" placeholder="Whitepapper url..." className="msm:w-full lg:mr-20 mb-20"/>
          </div>
        </div>
        <div className="px-5 mb-30">
          <label htmlFor="">Description</label>
          <textarea name="description" id="description" className="border-2 border-gray-500 hover:border-red-200 focus:border-red-500 outline-none p-5 min-w-full focus:shadow rounded-md w-full"/>
        </div>
        <div className="flex lg:justify-end msm:justify-center">
          <div className="bg-white border-2 border-gray-500 text-center py-5 text-20 font-bold px-20 min-w-min cursor-pointer hover:shadow-xl mr-50" onClick={handleBack}>Back</div>
          <div className="bg-yellow-400 text-center py-5 text-20 font-bold px-20 min-w-min cursor-pointer hover:shadow-xl " onClick={handleNext}>NEXT</div>
        </div>
      </form>
    </Page>
  )
}
