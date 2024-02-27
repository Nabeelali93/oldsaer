import React ,{lazy,Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'


import Loadder from '../Components/Comman/Loadder';

const SearchUmrah = lazy(() => import ("../Components/SearchUmrah"))

const Flight = lazy(() => import ("../Components/Flights"))

const Makkah = lazy(() => import ("../Components/Makkah"))

const PrivacyPolicy = lazy(() => import ("../Components/PrivacyPolicy"))

const TermsCondition = lazy(() => import ("../Components/TermsCondition"))

const DealsOffer = lazy(() => import ("../Components/DealsOffer"))

const HelpCenter = lazy(() => import ("../Components/HelpCenter"))

const Trip = lazy(() => import ("../Components/Trip"))

const GetVisa = lazy(() => import ("../Components/GetVisa"))

const GetInsurance = lazy(() => import ("../Components/GetInsurance"))

const HotelCardDetails = lazy(() => import ("../Components/HotelCardDetails"))

const FoodPreview = lazy(() => import ("../Components/FoodPreview"))

const MadinaHotel = lazy(() => import ("../Components/MadinaHotel"))

const MadinaHotelPre = lazy(() => import ("../Components/MadinaHotelPre"))

const ContactDetails = lazy(() => import ("../Components/Stepper/ContactDetails"))

const PaymentDetails = lazy(() => import ("../Components/Stepper/PaymentDetails"))

const ManageBooking = lazy(() => import ("../Components/ManageBooking"))

const FlightMain = lazy(() => import ("../Components/FlightMain"))

const MakkahMain = lazy(() => import ("../Components/MakkahMain"))

const Bookhotel = lazy(() => import ("../Components/Bookhotel"))

const Modifyhotel = lazy(() => import ("../Components/Modifyhotel"))

const Bookflight = lazy(() => import ("../Components/Bookflight"))

const Modifyflight = lazy(() => import ("../Components/Modifyflight"))

const Bookhotelpreview = lazy(() => import ("../Components/Bookhotelpreview"))

const Bookdeal = lazy(() => import ("../Components/Bookdeal"))

const Bookinsurance = lazy(() => import ("../Components/Bookinsurance"))

const Modifyinsurance = lazy(() => import ("../Components/Modifyinsurance"))

const Bookvisa = lazy(() => import ("../Components/Bookvisa"))

const Booktrip = lazy(() => import ("../Components/Booktrip"))

const Modifyvisa = lazy(() => import ("../Components/Modifyvisa"))

const Modifytrip = lazy(() => import ("../Components/Modifytrip"))





function Navigation() {
  return (
    <div>

<Routes>
    
    <Route  path='/'   element={
            <Suspense fallback={<Loadder />}>
              <SearchUmrah />
            </Suspense>
          }/>


<Route   path='/flightmain'    element={
            <Suspense fallback={<Loadder />}>
              <FlightMain />
            </Suspense>
          }/>

<Route   path='/flight'    element={
            <Suspense fallback={<Loadder />}>
              <Flight />
            </Suspense>
          }/>

<Route   path='/gethotelmain'    element={
            <Suspense fallback={<Loadder />}>
              <MakkahMain />
            </Suspense>
          }/>




<Route   path='/gethotel'    element={
            <Suspense fallback={<Loadder />}>
              <Makkah />
            </Suspense>
          }/>




<Route   path='/privacyPolicy'    element={
            <Suspense fallback={<Loadder />}>
              <PrivacyPolicy />
            </Suspense>
          }/>


<Route   path='/TermsCondition'    element={
            <Suspense fallback={<Loadder />}>
              <TermsCondition />
            </Suspense>
          }/>



<Route   path='/dealoffer'    element={
            <Suspense fallback={<Loadder />}>
              <Bookdeal />
            </Suspense>
          }/>


<Route   path='/HelpCenter'    element={
            <Suspense fallback={<Loadder />}>
              <HelpCenter/>
            </Suspense>
          }/>

<Route   path='/Trip'    element={
            <Suspense fallback={<Loadder />}>
              <Trip />
            </Suspense>
          }/>

<Route   path='/GetVisa'    element={
            <Suspense fallback={<Loadder />}>
              <GetVisa />
            </Suspense>
          }/>


<Route   path='/GetInsurance'    element={
            <Suspense fallback={<Loadder />}>
              <GetInsurance />
            </Suspense>
          }/>

<Route   path='/HotelPreviews'    element={
            <Suspense fallback={<Loadder />}>
              <HotelCardDetails />
            </Suspense>
          }/>


<Route   path='/MadinaHotel'    element={
            <Suspense fallback={<Loadder />}>
              <MadinaHotel />
            </Suspense>
          }/>

<Route   path='/MadinaHotelPre'    element={
            <Suspense fallback={<Loadder />}>
              <MadinaHotelPre />
            </Suspense>
          }/>


<Route   path='/contactDetail'    element={
            <Suspense fallback={<Loadder />}>
              <ContactDetails />
            </Suspense>
          }/>

<Route   path='/umrahcontactdetail'    element={
            <Suspense fallback={<Loadder />}>
              <ContactDetails />
            </Suspense>
          }/>


<Route   path='/dealcontactdetail'    element={
            <Suspense fallback={<Loadder />}>
              <ContactDetails />
            </Suspense>
          }/>

<Route   path='/visa/contactdetail'    element={
            <Suspense fallback={<Loadder />}>
              <ContactDetails />
            </Suspense>
          }/>

<Route   path='/paymentdeatils'    element={
            <Suspense fallback={<Loadder />}>
              <PaymentDetails />
            </Suspense>
          }/>

<Route   path='/manageBooking'    element={
            <Suspense fallback={<Loadder />}>
              <ManageBooking />
            </Suspense>
          }/>

<Route   path='/bookhotel'    element={
            <Suspense fallback={<Loadder />}>
              <Bookhotel />
            </Suspense>
          }/>


<Route   path='/modifyhotel'    element={
            <Suspense fallback={<Loadder />}>
              <Modifyhotel />
            </Suspense>
          }/>

<Route   path='/bookflight'    element={
            <Suspense fallback={<Loadder />}>
              <Bookflight />
            </Suspense>
          }/>



<Route   path='/modifyflight'    element={
            <Suspense fallback={<Loadder />}>
              <Modifyflight />
            </Suspense>
          }/>

<Route   path='/bookhotelpreview'    element={
            <Suspense fallback={<Loadder />}>
              <Bookhotelpreview />
            </Suspense>
          }/>

<Route   path='/Hotelinformation'    element={
            <Suspense fallback={<Loadder />}>
              <ContactDetails />
            </Suspense>
          }/>

<Route   path='/bookinsurance'    element={
            <Suspense fallback={<Loadder />}>
              <Bookinsurance />
            </Suspense>
          }/>

<Route   path='/modifyinsurance'    element={
            <Suspense fallback={<Loadder />}>
              <Modifyinsurance />
            </Suspense>
          }/>


<Route   path='/bookdeal'    element={
            <Suspense fallback={<Loadder />}>
              <Bookdeal />
            </Suspense>
          }/>

<Route   path='/bookvisa'    element={
            <Suspense fallback={<Loadder />}>
              <Bookvisa />
            </Suspense>
          }/>

<Route   path='/booktrip'    element={
            <Suspense fallback={<Loadder />}>
              <Booktrip />
            </Suspense>
          }/>

<Route   path='/modifyvisa'    element={
            <Suspense fallback={<Loadder />}>
              <Modifyvisa />
            </Suspense>
          }/>


<Route   path='/modifytrip'    element={
            <Suspense fallback={<Loadder />}>
              <Modifytrip />
            </Suspense>
          }/>


<Route   path='/Flightinformation'    element={
            <Suspense fallback={<Loadder />}>
              <ContactDetails />
            </Suspense>
          }/>
<Route   path='/dealoffer/flightinformation'    element={
            <Suspense fallback={<Loadder />}>
              <ContactDetails />
            </Suspense>
          }/>

<Route   path='/trip/flightinformation'    element={
            <Suspense fallback={<Loadder />}>
              <ContactDetails />
            </Suspense>
          }/>



    </Routes>      
    </div>
  )
}

export default Navigation

