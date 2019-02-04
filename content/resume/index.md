
---
title: Resume
author: grahame
type: page
---


# F. Grahame Murray
https://grahame.com       | jobs@grahame.com
--- | ---
Raleigh, NC 27604 | +1 (919) 828-9879
* * *
Last Updated on Monday, February 04, 2019.  Also available in 
  [HTML](https://grahame.com/resume/grahame_murray_resume.html), 
  [PDF](https://grahame.com/resume/grahame_murray_resume.pdf), 
  [Word](https://grahame.com/resume/grahame_murray_resume.doc), 
  [plain-text](https://grahame.com/resume/grahame_murray_resume.txt).
Visit https://github.com/gusnuf/resume to see the code that created this resume.

* * *


## KEYWORD SUMMARY
DevOps, Scalability, Python, Docker, Java, Mesos, Javascript, Puppet, AWS


## OBJECTIVE
I am looking for a full-time position as a lead, principal, or senior software (and/or systems) engineer or architect, designing and developing interesting and challenging systems, services, and applications.


## HIGHLIGHTS
* 15+ years software development and operations experience
* A highly curious generalist
* Product development and consulting experience
* Depth in language, educational, and community projects


## CORE COMPETENCIES
* High-scale web application and service development
* Combined development, deployment, and operations
* Systems architecture and design


## EXPERIENCE

### Senior Principal Software Engineer, *September 2016 - February 2019*
#### Nuance Communications  -    *Raleigh, NC*


##### Automotive division, Cloud Reliability Engineering, Infrastructure team

* Swype's Connect Operations team moved to the hosting group for the Mobile division, which later became to the new Automotive division
* Remained in 1st tier on-call rotation for Swype Connect
* Implemented Foreman for system management and provisioning of bare metal, ESX, and Azure instances
* Deployed infrastructure world-wide in Azure using purpose-built and reusable Terraform modules
* Integrated Katello for management of system and application content across all datacenters
* Rolled out FreeIPA to centrally manage SSL certificates, Kerberos, DNS, system auth (sssd), and application auth
* Designed and built proof-of-concept multi-tenant compute platform using Mesos, Marathon, Consul, Calico, HAProxy and Docker to support auto-scaling and blue-green deployments of microservices
* Architected a solution to provide applications and systems "Visibility" for our customers using ELK for logs, Graphite for metrics, and Sensu for alerts
* Built and maintained centralized, per-datacenter, secure, multi-tenant, ELK-stack clusters for "Visibility" using Elasticsearch, Kibana, Logstash, ElastAlert, and ReadonlyREST
* Created go app that generated Sensu checks for services running inside Kubernetes, querying API for services annotated with configmaps that describe alert thresholds
* Deployed Jenkins 2.0 integrated with GitLab for CICD.  Built shared pipelines (as code) to build all our RPMs, Docker images, and Puppet modules
* Made and/or used rspec-tested Puppet 4 modules to deploy all of the above
* Authored Puppet 4 "base" system module to manage all fundamental aspects of our systems, including: puppet, mco, auth, sshd, time, osquery, limits, firewall, auditd, packages, sysctl, monitoring, logs, selinux, DNS, and metrics
* Used Packer to bake Azure images for faster provisioning
* Setup a CI/CD pipeline to package each customer's "visibility" configurations (Kibana dashboards, Logstash configs, ElastAlert rules, and Grafana dashboards) and install them on the appropriate clusters
* Documented our platforms and stacks, evangelized them to our customers, and assisted with customer on-boarding

### Principal Software Engineer, *January 2012 - September 2016*
#### Nuance Communications  -    *Durham, NC*


##### Mobile division, TextIO R&D, Connect Operations team

* Swype was acquired by Nuance!
* Continued the development and improvement of the Swype Connect API, with the main focus on performance, allowing us to scale to hundreds of millions users
* Improved visibility of our connected services, using Graphite, statsd, collectd, Grafana, Kibana, and SNMP, giving us insight and trending data into how our application is performing and being used
* Switched from EC2 Auto-Scale to a Puppet managed, but manually scaled system
* Migrated SwypeConnect from AWS to an in-house, managed ESX cluster
* Used Hadoop and Pig to mine Cassandra for application usage and trend data
* Built second API in Go, wrapping core business logic written in C, to support realtime predictions in the cloud
* Assumed responsibility of legacy Java/Spring language database mangement system
* Built server support for on-device storefront
* Deployed and support applications in Chinese datacenters

### Senior Systems Engineer, *June 2011 - December 2011*
#### Swype  -    *Durham, NC*


##### Engineering, Connect Operations team

* Came on board to lead the effort of building a high-scale web-service to support tens of millions of mobile transactions per day, to enhance phones using the Swype keyboard
* Built a multi-datacenter, geographically redundant, Python/WSGI web-service to support millions of write-heavy requests per day, backed by a similarly redundant Cassandra cluster
* Hosted in Amazon Web Services, for ease of build-out and managed infrastructure, utilizing EC2, AutoScale, CloudFront, CloudWatch, S3, Route53, RDS, ElasticCache
* Used EC2 auto-scaling to ensure a timely response to customer demands
* Built a true DevOps team, using PagerDuty, Nagios, Graylog, SyslogNG, and EC2, plus our stateless custom web service that we both developed and operated in Production

### Principal Software Engineer, *September 2002 - June 2011*
#### BBH Media  -    *Raleigh, NC*


##### Engineering team

* Architected and developed and new website platform; moving all high-volume sites into a centralized, load-balanced, three-tier, standardized codebase using jQuery, PHP on Zend Framework, SOAP, JPA, EJB3, MySQL, and Lucene
* Built a web-service-exposed, JEE middleware to power customer self-service and management portal using JPA, EJB3, SOAP, and MySQL
* Architected, designed, and developed a scalable, clustered, high-availability, J2EE-based content authoring and management system using JBoss, Hibernate, JSP2, XSLT, and SQL Server
* Designed, optimized, and normalized all major business systems' database schemas
* Developed custom content management system using JBoss, EJB, Struts, Velocity, JSP, JSTL, and PostgreSQL
* Made heavy use of DHTML and JavaScript for both front-facing and internal applications, including remote scripting and AJAX
* Built and extended a custom PHP-based CMS system for e-zine publication
* Wrote functional, integration, and unit tests
* Administered CruiseControl and Hudson continuous integration and build systems
* Mentored junior and new engineering hires
* Documented requirements for outsourced projects
* Designed and built internal web applications to automate internal business functions, such as content publishing, indexing, and search
* Built international, multi-currency money management system, including automated thirty-party import and international credit card processing
* Created and maintained PHP and PERL scripts for website management and content validation
* Ported and rewrote legacy PERL scripts with more robust PHP scripts, also adding new site features such as pagination
* De facto and acting Linux, BSD, and Windows system administrator

### Lead Engineer, *May 2002 - September 2002*
#### Sun Microsystems  -    *Menlo Park, CA*


##### Internal Support, Developer Web Services

* Led engineering effort for devCK, Developer Community Knowledge project
* Main developer for reimplementation of JCP site, tasks included:
* Redesigning the entire DB schema, as well as creating object-relational mapping
* Porting and upgrading the administrative site from old Vignette TCL to the new Java platform
* Rebuilding the public website from JSP (Model 2) site to MVC, as well as using the new data model

### Java Engineer, *September 2001 - January 2002*
#### James Irvine Foundation  -    *San Francisco, CA*


##### Systems Engineering team

* Independently contracted with the James Irvine Foundation to complete Coral Connect project.
* Designed and implemented message boards, file storage, address book, and other interactive services of the project using Arsdigita Community System, XML, XSL, and Oracle 8i.
* Configured qmail, Courier IMAP, JWMA Web mail, and ACS for Java on Solaris 2.8 for custom integrated webmail feature.

### Java Systems Engineer, *March 2001 - September 2001*
#### Liquid Thinking  -    *San Francisco, CA*


##### Systems Engineering team

* Designed and implemented binary parsing, scoring, and other educational algorithms for an interactive educational product using Rational Rose and ATG Dynamo 4.5.
* Architected and designed file system integration for intranet using Arsdigita Community System 4.6, XML, and XSL.
* Implemented product family parametric search for Cypress Semiconductor using JavaScript, PERL, and ColdFusion.
* Led Quality Assurance effort for Certicom site redesign using Logigear TrackGear.
* Began work on CoralConnect but entire team was then down-sized (finished at subsequent position with James Irvine Foundation)

### Software Engineer, *June 1999 - February 2001*
#### SRI International  -    *Menlo Park, CA*


##### Policy division, Center for Technology in Learning

* Architected and implemented many web applications, online surveys, and web assessments using Java Servlets, JSPs, XML, and MySQL databases.
* Designed and coded various reusable frameworks, from survey tools to database abstraction layers.
* Co-developed and designed ChemSense, a Java-based Knowledge Building Environment for high-school chemistry students.
* Built CILT Knowledge Network and affiliated web sites, and single sign-on framework in Cold Fusion and MySQL on Linux.
* Designed and authored TeamLab, a Palm Pilot-based open-ended assessment application, desktop conduit, and website that supports off-line data collection and on-line statistical analysis.
* Helped port URLex from Python code to Java.
* Implemented Instructional Metadata IMS Metadata XML Generator tool, on a contract for Sun Microsystems



## COMPUTER SKILLS
### Computer Languages:
Python, Java, Go (golang), Javascript, Ruby, JSP & JSTL/EL, Scala, XML, PHP, DHTML & XHTML, Groovy, XSLT & FO/P, PERL, Bash, Velocity, i18n, C & C++, ColdFusion, Lisp, MIPS assembly, InstallShield Script

### Databases:
Cassandra, MongoDB, MySQL/Maria, PostgreSQL, MS SQL, Oracle, Solid, FileMaker Pro, mSQL, Access

### Platforms:
Kubernetes, Mesos, JBoss, Tomcat, Zend Framework, Spring, Resin, ColdFusion, Vignette, ATG Dynamo, Arsdigita ACS

### Tools:
  **Web Servers**: nginx, haproxy, uWSGI, gunicorn, Apache

  **Provisioning**: Foreman, Cobbler, Terraform, Packer, AWS CloudFormation, Azure Templates

  **Container**: Docker, Mesos, Kubernetes, Marathon

  **Virtual Network**: Calico, istio, Flannel, Weave, OpenVSwitch

  **Service Discovery**: Consul, Zookeeper, Etcd, MesosDNS

  **Configuration Management**: Puppet, Ansible, MCollective, Chef

  **Search**: ElasticSearch, Kibana, Logstash, ElastAlert, ReadonlyREST, SOLR, Lucene, Verity

  **Monitoring**: Sensu, Nagios, SNMP, Cacti, SyslogNG

  **Metrics**: Graphite, Prometheus, Carbon, Collectd, Statsd, Bucky

  **Identity/Auth**: FreeIPA, Vault, OpenLDAP, OpenID, OAuth

  **NoSQL**: Cassandra, HBase, MongoDB, CouchDB, Riak

  **Reporting**: Spark, Hadoop, Pig, Hive, Pentaho, Jasper, Crystal Reports

  **Messaging**: RabbitMQ, ActiveMQ, JBossMQ, JBoss Messaging

  **IDE**: IntelliJ IDEA, PyCharm, Eclipse, NetBeans, Xcode, Visual Studio, CodeWarrior, JBuilder

  **Modeling**: Visio, OmniGraffle, Rational Rose, Visual Paradigm, Poseidon, Argo UML

  **Version Control**: Git, Subversion, CVS, Perforce, SCCS, RCS

  **Bug Tracking**: JIRA, Bugzilla, Eventum, TrackGear

  **Web UI**: jQuery, YUI

  **Build**: Ant, Jenkins, Travis, Hudson, Cruise Control, Maven, Ivy, Make

  **Unit Testing**: py.test, JUnit, Cobertura, Mockito, EasyMock, JMock, Cactus, TestNG

  **Performance Testing**: JMeter, Apache Benchmark, JProbe

  **Caching**: Redis, Memcache, APC, XCache

  **Web/Integration Testing**: Selenium, JProbe

  **Persistence**: Hibernate, JPA, EJB, OJB

  **MVC**: Django, Ember, Angular, Struts, Grails, Spring MVC, Cake PHP, Bebop

  **Virtualization**: AWS, Vagrant, Azure, ESX, VirtualBox, Xen

  **Text Editor**: vi(m), Atom, Emacs

  **Installer**: InstallShield, NSIS

  **Command Line**: GNU tools, Cygwin

  **IM**: Jabberd, Openfire

  **Aspect Handling**: AspectJ, JBossAOP


### Operating Systems:
CentOS, Windows Vista/XP/2000/NT, RedHat EL, MacOS, Solaris, PalmOS, BSD, SunOS



## PUBLICATIONS
"Disambiguating Drag-and-Drop: The Click-and-Fill alternative to managing hierarchies"
I explained my implementation of a new "Drag and Drop" like interface
Published: CHI 2000 Conference Proceedings, April 6, 2000

"Workpad + Palm Series Powered Pack 2000 Edition"
My software was written up, rated, and included on accompanying CD-ROM
Published: ASCII Corp., March 10, 2000

"Workpad + Palm Series Powered Pack"
My software was written up, rated, and included on accompanying CD-ROM
Published: ASCII Corp., June 11, 1999



## EDUCATION
1995 - 2000 Goucher College  Towson, MD
BA in Computer Science
Courses in Java, LISP, 3D Graphics, A.I., Assembly, Software Engineering, Algorithms, Hardware Architecture, and Computation

Summers 1994 - 1997 University of Delaware  Newark, DE
Graduate & undergraduate courses in C, C++, compiler design, computer graphics, and multimedia design.



## REFERENCES
Available upon request