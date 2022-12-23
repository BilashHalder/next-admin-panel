import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

import Close from 'mdi-material-ui/Close'


const showErrors = (field, valueLen, min) => {
    if (valueLen === 0) {
      return `${field} field is required`
    } else if (valueLen > 0 && valueLen < min) {
      return `${field} must be at least ${min} characters`
    } else {
      return ''
    }
  }


  const Header = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3, 4),
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default
  }))

  const schema = yup.object().shape({
    company: yup.string().required(),
    country: yup.string().required(),
    email: yup.string().email().required(),
    contact: yup
      .number()
      .typeError('Contact Number field is required')
      .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
      .required(),
    fullName: yup
      .string()
      .min(5, obj => showErrors('First Name', obj.value.length, obj.min))
      .required(),
    username: yup
      .string()
      .min(3, obj => showErrors('Username', obj.value.length, obj.min))
      .required()
  })


  const defaultValues = {
    email: '',
    company: '',
    country: '',
    contact: '',
    fullName: '',
    username: ''
  }




export default function EmployeeNew(props) {
    const { open, toggle } = props;
    const [plan, setPlan] = useState('basic')
    const [role, setRole] = useState('subscriber')
    const {
        reset,
        control,
        setValue,
        handleSubmit,
        formState: { errors }
      } = useForm({
        defaultValues,
        mode: 'onChange',
        resolver: yupResolver(schema)
      })

      const onSubmit = data => {
       console.log({ ...data, role, currentPlan: plan })
        toggle()
        reset()
      }

      const handleClose = () => {
        setPlan('basic')
        setRole('subscriber')
        setValue('contact', '')
        toggle()
        reset()
      }

  return (
    <Drawer
    open={open}
    anchor='top'
    variant='temporary'
    onClose={handleClose}
    ModalProps={{ keepMounted: true }}
  >

    <Header >
    <Typography  sx={{pl:"33%"}} variant='h6' >Add Associate</Typography>
      <Close fontSize='small' onClick={handleClose} sx={{ cursor: 'pointer' }} />
    </Header>
    <Box sx={{ p: 5 }}>
      <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4} >
      <Grid item md={4}>
      <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
            name='fullName'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                value={value}
                label='Full Name'
                onChange={onChange}
                placeholder='Associate Name'
                error={Boolean(errors.fullName)}
              />
            )}
          />
          {errors.fullName && <FormHelperText sx={{ color: 'error.main' }}>{errors.fullName.message}</FormHelperText>}
        </FormControl>
      </Grid>
       <Grid item md={4}>
       <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
            name='username'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                value={value}
                label='Username'
                onChange={onChange}
                placeholder='Associate Name'
                error={Boolean(errors.username)}
              />
            )}
          />
          {errors.username && <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>}
        </FormControl>
       </Grid>
      <Grid item md={4}>
      <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                type='email'
                value={value}
                label='Email'
                onChange={onChange}
                placeholder='johndoe@email.com'
                error={Boolean(errors.email)}
              />
            )}
          />
          {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
        </FormControl>
      </Grid>
      <Grid item md={4}>
      <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
            name='company'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                value={value}
                label='Company'
                onChange={onChange}
                placeholder='Company PVT LTD'
                error={Boolean(errors.company)}
              />
            )}
          />
          {errors.company && <FormHelperText sx={{ color: 'error.main' }}>{errors.company.message}</FormHelperText>}
        </FormControl>
      </Grid>
       <Grid item md={4}><FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
            name='country'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                value={value}
                label='Country'
                onChange={onChange}
                placeholder='Australia'
                error={Boolean(errors.country)}
              />
            )}
          />
          {errors.country && <FormHelperText sx={{ color: 'error.main' }}>{errors.country.message}</FormHelperText>}
        </FormControl></Grid>
       <Grid item md={4}>   <FormControl fullWidth sx={{ mb: 6 }}>
          <Controller
            name='contact'
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange } }) => (
              <TextField
                type='number'
                value={value}
                label='Contact'
                onChange={onChange}
                placeholder='(397) 294-5153'
                error={Boolean(errors.contact)}
              />
            )}
          />
          {errors.contact && <FormHelperText sx={{ color: 'error.main' }}>{errors.contact.message}</FormHelperText>}
        </FormControl></Grid>
       <Grid item md={4}>  <FormControl fullWidth sx={{ mb: 6 }}>
          <InputLabel id='role-select'>Select Role</InputLabel>
          <Select
            fullWidth
            value={role}
            id='select-role'
            label='Select Role'
            labelId='role-select'
            onChange={e => setRole(e.target.value)}
            inputProps={{ placeholder: 'Select Role' }}
          >
            <MenuItem value='admin'>Admin</MenuItem>
            <MenuItem value='author'>Author</MenuItem>
            <MenuItem value='editor'>Editor</MenuItem>
            <MenuItem value='maintainer'>Maintainer</MenuItem>
            <MenuItem value='subscriber'>Subscriber</MenuItem>
          </Select>
        </FormControl></Grid>
        
     <Grid item md={4}><FormControl fullWidth sx={{ mb: 6 }}>
          <InputLabel id='plan-select'>Select Plan</InputLabel>
          <Select
            fullWidth
            value={plan}
            id='select-plan'
            label='Select Plan'
            labelId='plan-select'
            onChange={e => setPlan(e.target.value)}
            inputProps={{ placeholder: 'Select Plan' }}
          >
            <MenuItem value='basic'>Basic</MenuItem>
            <MenuItem value='company'>Company</MenuItem>
            <MenuItem value='enterprise'>Enterprise</MenuItem>
            <MenuItem value='team'>Team</MenuItem>
          </Select>
        </FormControl></Grid>
     <Grid item md={4}>      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
            Submit
          </Button>
          <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
        </Box></Grid>
        </Grid>
      </Box>
    </Box>
  </Drawer>
  )
}
