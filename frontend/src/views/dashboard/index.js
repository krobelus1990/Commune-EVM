import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

const dashSalesData = [
  { title: 'Daily Sales', amount: '$249.95', icon: 'icon-arrow-up text-c-green', value: 50, class: 'progress-c-theme' },
  { title: 'Monthly Sales', amount: '$2.942.32', icon: 'icon-arrow-down text-c-red', value: 36, class: 'progress-c-theme2' },
  { title: 'Yearly Sales', amount: '$8.638.32', icon: 'icon-arrow-up text-c-green', value: 70, color: 'progress-c-theme' }
];

const DashDefault = () => {
  return (
    <React.Fragment>
      <Row>
        {dashSalesData.map((data, index) => {
          return (
            <Col key={index} xl={6} xxl={4}>
              <Card>
                <Card.Body className=' dark:tw-bg-[rgb(33,33,33)]'>
                  <h6 className='mb-4 dark:tw-text-white'>{data.title}</h6>
                  <div className='row d-flex align-items-center'>
                    <div className='col-9'>
                      <h3 className='f-w-300 d-flex align-items-center m-b-0 dark:tw-text-white'>
                        <i className={`feather ${data.icon} f-30 m-r-5 `} /> $249.95
                      </h3>
                    </div>
                    <div className='col-3 text-end'>
                      <p className='m-b-0 dark:tw-text-white'>{data.value}%</p>
                    </div>
                  </div>
                  <div className='progress m-t-30' style={{ height: '7px' }}>
                    <div
                      className={`progress-bar ${data.class}`}
                      role='progressbar'
                      style={{ width: `${data.value}%` }}
                      aria-valuenow={data.value}
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        {/* <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <h6 className='mb-4'>Monthly Sales</h6>
              <div className='row d-flex align-items-center'>
                <div className='col-9'>
                  <h3 className='f-w-300 d-flex align-items-center m-b-0'>
                    <i className='feather icon-arrow-down text-c-red f-30 m-r-5' /> $2.942.32
                  </h3>
                </div>

                <div className='col-3 text-end'>
                  <p className='m-b-0'>36%</p>
                </div>
              </div>
              <div className='progress m-t-30' style={{ height: '7px' }}>
                <div
                  className='progress-bar progress-c-theme2'
                  role='progressbar'
                  style={{ width: '35%' }}
                  aria-valuenow='35'
                  aria-valuemin='0'
                  aria-valuemax='100'
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card>
            <Card.Body>
              <h6 className='mb-4'>Yearly Sales</h6>
              <div className='row d-flex align-items-center'>
                <div className='col-9'>
                  <h3 className='f-w-300 d-flex align-items-center m-b-0'>
                    <i className='feather icon-arrow-up text-c-green f-30 m-r-5' /> $8.638.32
                  </h3>
                </div>

                <div className='col-3 text-end'>
                  <p className='m-b-0'>70%</p>
                </div>
              </div>
              <div className='progress m-t-30' style={{ height: '7px' }}>
                <div
                  className='progress-bar progress-c-theme'
                  role='progressbar'
                  style={{ width: '70%' }}
                  aria-valuenow='70'
                  aria-valuemin='0'
                  aria-valuemax='100'
                />
              </div>
            </Card.Body>
          </Card>
        </Col> */}
        <Col md={6} xl={8}>
          <Card className='Recent-Users dark:tw-bg-[rgb(33,33,33)]'>
            <Card.Header>
              <Card.Title as='h5' className='dark:tw-text-white'>
                <span className='dark:tw-text-white'>Recent Users</span>
              </Card.Title>
            </Card.Header>
            <Card.Body className='px-0 py-2 dark:tw-bg-[rgb(33,33,33)]'>
              <Table responsive hover className='recent-users dark:tw-bg-[rgb(33,33,33)]'>
                <tbody>
                  <tr className='unread dark:tw-bg-[rgb(33,33,33)]'>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar1} alt='activity-user' />
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Isabella Christensen</h6>
                      <p className='m-0 dark:tw-text-white'>Lorem Ipsum is simply dummy text of…</p>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='text-muted dark:tw-text-white'>
                        <i className='fa fa-circle text-c-green f-10 m-r-15' />
                        11 MAY 12:56
                      </h6>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <Link to='#' className='label theme-bg2 text-white f-12 '>
                        Reject
                      </Link>
                      <Link to='#' className='label theme-bg text-white f-12 '>
                        Approve
                      </Link>
                    </td>
                  </tr>
                  <tr className='unread'>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar2} alt='activity-user' />
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Mathilde Andersen</h6>
                      <p className='m-0 dark:tw-text-white'>Lorem Ipsum is simply dummy text of…</p>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='text-muted'>
                        <i className='fa fa-circle text-c-red f-10 m-r-15' />
                        11 MAY 10:35
                      </h6>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <Link to='#' className='label theme-bg2 text-white f-12 '>
                        Reject
                      </Link>
                      <Link to='#' className='label theme-bg text-white f-12 '>
                        Approve
                      </Link>
                    </td>
                  </tr>
                  <tr className='unread'>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar3} alt='activity-user' />
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Karla Sorensen</h6>
                      <p className='m-0 dark:tw-text-white'>Lorem Ipsum is simply dummy text of…</p>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='text-muted dark:tw-text-white'>
                        <i className='fa fa-circle text-c-green f-10 m-r-15' />9 MAY 17:38
                      </h6>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <Link to='#' className='label theme-bg2 text-white f-12 '>
                        Reject
                      </Link>
                      <Link to='#' className='label theme-bg text-white f-12 '>
                        Approve
                      </Link>
                    </td>
                  </tr>
                  <tr className='unread'>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar1} alt='activity-user' />
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Ida Jorgensen</h6>
                      <p className='m-0 dark:tw-text-white'>Lorem Ipsum is simply dummy text of…</p>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='text-muted f-w-300 dark:tw-text-white'>
                        <i className='fa fa-circle text-c-red f-10 m-r-15' />
                        19 MAY 12:56
                      </h6>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <Link to='#' className='label theme-bg2 text-white f-12 '>
                        Reject
                      </Link>
                      <Link to='#' className='label theme-bg text-white f-12 '>
                        Approve
                      </Link>
                    </td>
                  </tr>
                  <tr className='unread'>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar2} alt='activity-user' />
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Albert Andersen</h6>
                      <p className='m-0 dark:tw-text-white'>Lorem Ipsum is simply dummy text of…</p>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <h6 className='text-muted dark:tw-text-white'>
                        <i className='fa fa-circle text-c-green f-10 m-r-15' />
                        21 July 12:56
                      </h6>
                    </td>
                    <td className='dark:tw-bg-[rgb(33,33,33)]'>
                      <Link to='#' className='label theme-bg2 text-white f-12 '>
                        Reject
                      </Link>
                      <Link to='#' className='label theme-bg text-white f-12 '>
                        Approve
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card className='card-event dark:tw-bg-[rgb(33,33,33)]'>
            <Card.Body>
              <div className='row align-items-center justify-content-center '>
                <div className='col'>
                  <h5 className='m-0 dark:tw-text-white'>Upcoming Event</h5>
                </div>
                <div className='col-auto'>
                  <label className='label theme-bg2 text-white f-14 f-w-400 float-end dark:tw-text-white'>34%</label>
                </div>
              </div>
              <h2 className='mt-2 f-w-300 dark:tw-text-white'>
                45<sub className='text-muted f-14 dark:tw-text-white'>Competitors</sub>
              </h2>
              <h6 className='text-muted mt-3 mb-0 dark:tw-text-white'>You can participate in event </h6>
              <i className='fa fa-angellist text-c-purple f-50' />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className='border-bottom dark:tw-bg-[rgb(33,33,33)]'>
              <div className='row d-flex align-items-center'>
                <div className='col-auto'>
                  <i className='feather icon-zap f-30 text-c-green' />
                </div>
                <div className='col'>
                  <h3 className='f-w-300 dark:tw-text-white'>235</h3>
                  <span className='d-block text-uppercase dark:tw-text-white'>total ideas</span>
                </div>
              </div>
            </Card.Body>
            <Card.Body className='dark:tw-bg-[rgb(33,33,33)]'>
              <div className='row d-flex align-items-center'>
                <div className='col-auto'>
                  <i className='feather icon-map-pin f-30 text-c-blue' />
                </div>
                <div className='col'>
                  <h3 className='f-w-300 dark:tw-text-white'>26</h3>
                  <span className='d-block text-uppercase dark:tw-text-white'>total locations</span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card className='card-social dark:tw-bg-[rgb(33,33,33)]'>
            <Card.Body className='border-bottom'>
              <div className='row align-items-center justify-content-center'>
                <div className='col-auto'>
                  <i className='fab fa-facebook-f text-primary f-36' />
                </div>
                <div className='col text-end'>
                  <h3 className=' dark:tw-text-white'>12,281</h3>
                  <h5 className='text-c-green mb-0'>
                    +7.2% <span className='text-muted'>Total Likes</span>
                  </h5>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div className='row align-items-center justify-content-center card-active'>
                <div className='col-6'>
                  <h6 className='text-center m-b-10 dark:tw-text-white'>
                    <span className='text-muted m-r-5 '>Target:</span>35,098
                  </h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-c-theme'
                      role='progressbar'
                      style={{ width: '60%', height: '6px' }}
                      aria-valuenow='60'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <h6 className='text-center  m-b-10 dark:tw-text-white'>
                    <span className='text-muted m-r-5'>Duration:</span>350
                  </h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-c-theme2'
                      role='progressbar'
                      style={{ width: '45%', height: '6px' }}
                      aria-valuenow='45'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card className='card-social dark:tw-bg-[rgb(33,33,33)]'>
            <Card.Body className='border-bottom'>
              <div className='row align-items-center justify-content-center'>
                <div className='col-auto'>
                  <i className='fab fa-twitter text-c-blue f-36' />
                </div>
                <div className='col text-end'>
                  <h3 className='tw-text-white'>11,200</h3>
                  <h5 className='text-c-purple mb-0'>
                    +6.2% <span className='text-muted'>Total Likes</span>
                  </h5>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div className='row align-items-center justify-content-center card-active'>
                <div className='col-6'>
                  <h6 className='text-center m-b-10 tw-text-white'>
                    <span className='text-muted m-r-5'>Target:</span>34,185
                  </h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-c-green'
                      role='progressbar'
                      style={{ width: '40%', height: '6px' }}
                      aria-valuenow='40'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <h6 className='text-center  m-b-10 tw-text-white'>
                    <span className='text-muted m-r-5'>Duration:</span>800
                  </h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-c-blue'
                      role='progressbar'
                      style={{ width: '70%', height: '6px' }}
                      aria-valuenow='70'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className='card-social dark:tw-bg-[rgb(33,33,33)]'>
            <Card.Body className='border-bottom'>
              <div className='row align-items-center justify-content-center'>
                <div className='col-auto'>
                  <i className='fab fa-google-plus-g text-c-red f-36' />
                </div>
                <div className='col text-end'>
                  <h3 className='tw-text-white'>10,500</h3>
                  <h5 className='text-c-blue mb-0'>
                    +5.9% <span className='text-muted'>Total Likes</span>
                  </h5>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div className='row align-items-center justify-content-center card-active'>
                <div className='col-6'>
                  <h6 className='text-center m-b-10 tw-text-white'>
                    <span className='text-muted m-r-5'>Target:</span>25,998
                  </h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-c-theme'
                      role='progressbar'
                      style={{ width: '80%', height: '6px' }}
                      aria-valuenow='80'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
                <div className='col-6'>
                  <h6 className='text-center  m-b-10 tw-text-white'>
                    <span className='text-muted m-r-5'>Duration:</span>900
                  </h6>
                  <div className='progress'>
                    <div
                      className='progress-bar progress-c-theme2'
                      role='progressbar'
                      style={{ width: '50%', height: '6px' }}
                      aria-valuenow='50'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card className='dark:tw-bg-[rgb(33,33,33)]'>
            <Card.Header className='dark:tw-bg-[rgb(33,33,33)]'>
              <Card.Title as='h5'>
                <span className='dark:tw-text-white'>Rating</span>
              </Card.Title>
            </Card.Header>
            <Card.Body className='dark:tw-bg-[rgb(33,33,33)]'>
              <div className='row align-items-center justify-content-center m-b-20'>
                <div className='col-6'>
                  <h2 className='f-w-300 d-flex align-items-center float-start m-0 dark:tw-text-white'>
                    4.7 <i className='fa fa-star f-10 m-l-10 text-c-yellow' />
                  </h2>
                </div>
                <div className='col-6'>
                  <h6 className='d-flex  align-items-center float-end m-0 dark:tw-text-white'>
                    0.4 <i className='fa fa-caret-up text-c-green f-22 m-l-10' />
                  </h6>
                </div>
              </div>

              <div className='row'>
                <div className='col-xl-12'>
                  <h6 className='align-items-center float-start dark:tw-text-white'>
                    <i className='fa fa-star f-10 m-r-10 text-c-yellow' />5
                  </h6>
                  <h6 className='align-items-center float-end dark:tw-text-white'>384</h6>
                  <div className='progress m-t-30 m-b-20' style={{ height: '6px' }}>
                    <div
                      className='progress-bar progress-c-theme'
                      role='progressbar'
                      style={{ width: '70%' }}
                      aria-valuenow='70'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>

                <div className='col-xl-12'>
                  <h6 className='align-items-center float-start dark:tw-text-white'>
                    <i className='fa fa-star f-10 m-r-10 text-c-yellow' />4
                  </h6>
                  <h6 className='align-items-center float-end dark:tw-text-white'>145</h6>
                  <div className='progress m-t-30  m-b-20' style={{ height: '6px' }}>
                    <div
                      className='progress-bar progress-c-theme'
                      role='progressbar'
                      style={{ width: '35%' }}
                      aria-valuenow='35'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>

                <div className='col-xl-12'>
                  <h6 className='align-items-center float-start dark:tw-text-white'>
                    <i className='fa fa-star f-10 m-r-10 text-c-yellow' />3
                  </h6>
                  <h6 className='align-items-center float-end dark:tw-text-white'>24</h6>
                  <div className='progress m-t-30  m-b-20' style={{ height: '6px' }}>
                    <div
                      className='progress-bar progress-c-theme'
                      role='progressbar'
                      style={{ width: '25%' }}
                      aria-valuenow='25'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>

                <div className='col-xl-12'>
                  <h6 className='align-items-center float-start dark:tw-text-white'>
                    <i className='fa fa-star f-10 m-r-10 text-c-yellow' />2
                  </h6>
                  <h6 className='align-items-center float-end dark:tw-text-white'>1</h6>
                  <div className='progress m-t-30  m-b-20' style={{ height: '6px' }}>
                    <div
                      className='progress-bar progress-c-theme'
                      role='progressbar'
                      style={{ width: '10%' }}
                      aria-valuenow='10'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
                <div className='col-xl-12'>
                  <h6 className='align-items-center float-start dark:tw-text-white'>
                    <i className='fa fa-star f-10 m-r-10 text-c-yellow' />1
                  </h6>
                  <h6 className='align-items-center float-end dark:tw-text-white'>0</h6>
                  <div className='progress m-t-30  m-b-5' style={{ height: '6px' }}>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: '0%' }}
                      aria-valuenow='0'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={8} className=''>
          <Card className='user-list dark:tw-bg-[rgb(30,30,30)]'>
            <Card.Header className=' dark:tw-bg-[rgb(30,30,30)]'>
              <Card.Title as='h5'>
                <span className='dark:tw-text-white'>User Project List</span>
              </Card.Title>
            </Card.Header>
            <Card.Body className='p-0 '>
              <Table responsive hover>
                <thead className=' '>
                  <tr className=' '>
                    <th className=' dark:tw-bg-[rgb(30,30,30)] dark:tw-text-white'>User</th>
                    <th className=' dark:tw-bg-[rgb(30,30,30)] dark:tw-text-white'>Project</th>
                    <th className=' dark:tw-bg-[rgb(30,30,30)] dark:tw-text-white'>Completed</th>
                    <th className=' dark:tw-bg-[rgb(30,30,30)] dark:tw-text-white'>Status</th>
                    <th className=' dark:tw-bg-[rgb(30,30,30)] dark:tw-text-white'>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=' dark:tw-bg-[rgb(30,30,30)]'>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar1} alt='activity-user' />
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Social Media App</h6>
                      <p className='m-0 dark:tw-text-white'>
                        Assigned to<span className='text-c-green'> Tristan Madsen</span>
                      </p>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <span className='pie_1 dark:tw-text-white'>326,134</span>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='m-0 dark:tw-text-white'>68%</h6>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='m-0 dark:tw-text-white'>October 26, 2017</h6>
                    </td>
                  </tr>

                  <tr>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar2} alt='activity-user' />
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Newspaper Wordpress Web</h6>
                      <p className='m-0 dark:tw-text-white'>
                        Assigned to<span className='text-c-green'> Marcus Poulsen</span>
                      </p>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <span className='pie_2 dark:tw-text-white'>110,134</span>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='m-0 dark:tw-text-white'>46%</h6>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='m-0 dark:tw-text-white'>September 4, 2017</h6>
                    </td>
                  </tr>

                  <tr>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar3} alt='activity-user' />
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Dashboard UI Kit Design</h6>
                      <p className='m-0 dark:tw-text-white'>
                        Assigned to<span className='text-c-green'> Felix Johansen</span>
                      </p>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <span className='pie_3 dark:tw-text-white'>226,134</span>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='m-0 dark:tw-text-white'>31%</h6>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='m-0 dark:tw-text-white'>November 14, 2017</h6>
                    </td>
                  </tr>
                  <tr>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <img className='rounded-circle' style={{ width: '40px' }} src={avatar1} alt='activity-user' />
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='mb-1 dark:tw-text-white'>Social Media App</h6>
                      <p className='m-0 dark:tw-text-white'>
                        Assigned to<span className='text-c-green'> Tristan Madsen</span>
                      </p>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <span className='pie_4 dark:tw-text-white'>500,134</span>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='m-0 dark:tw-text-white'>85%</h6>
                    </td>
                    <td className=' dark:tw-bg-[rgb(30,30,30)]'>
                      <h6 className='m-0 dark:tw-text-white'>December 14, 2017</h6>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashDefault;
